/* ============================================================================
   POCUS CASES — DATA FILE
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to add cases or wire up your GIFs.

   HOW TO ADD A GIF:
   1. Drop the file in  assets/gifs/  (any subfolder structure you like)
   2. Set the "gif" field below to that path, e.g. "assets/gifs/cp1-psax.gif"
   3. Leave "gif" as an empty string "" to show a "no clip loaded" placeholder.

   HOW TO ADD A CASE:
   1. Copy an existing case object (the whole {...} block) inside the
      indication's "cases" array.
   2. Give it a unique "id".
   3. Edit hpi / vitals / exam / labs / findings.
   Every case must include all 12 findings (4 cardiac, 4 lung, 4 abdomen) —
   mark each one normal:true or normal:false and write the interpretation.
   ============================================================================ */

const DATA = {
  indications: [
    {
      id: "chest-pain",
      name: "Chest Pain",
      accent: "#FF6B5B",
      tagline: "Pump, pipes, and the pleura",
      blurb: "Cardiac views paired with lung and IVC assessment to sort ischemia, effusion, and PE."
    },
    {
      id: "shortness-of-breath",
      name: "Shortness of Breath",
      accent: "#4FA8FF",
      tagline: "Wet, dry, or squeezed",
      blurb: "B-lines, effusions, and ventricular function separate cardiogenic from non-cardiogenic dyspnea."
    },
    {
      id: "aki",
      name: "Acute Kidney Injury",
      accent: "#F2C14E",
      tagline: "Pre-renal, renal, or post-renal",
      blurb: "Renal and bladder views screen for obstruction; IVC and heart assess volume status."
    },
    {
      id: "abdominal-pain",
      name: "Abdominal Pain",
      accent: "#7ED9A8",
      tagline: "Quadrant by quadrant",
      blurb: "RUQ, LUQ, and suprapubic windows for biliary, free fluid, and pelvic pathology."
    },
    {
      id: "hypotension",
      name: "Hypotension",
      accent: "#C78CFF",
      tagline: "The RUSH exam",
      blurb: "Pump, tank, and pipes — a full-body scan to find the source of shock fast."
    },
    {
      id: "mixed-review",
      name: "Mixed Review",
      accent: "#FF8FB8",
      tagline: "Put it all together",
      blurb: "Undifferentiated patients from every chief complaint and age group — scan all twelve windows and let the images steer the diagnosis."
    }
  ],

  cases: {
    /* ======================================================================
       CHEST PAIN
       ====================================================================== */
    "chest-pain": [
      {
        id: "cp1",
        title: "Sudden Pleuritic Pain After a Long Flight",
        teaser: "58F, 2 hours of pleuritic chest pain and dyspnea after a transatlantic flight.",
        hpi: "A 58-year-old woman presents with sudden-onset right-sided pleuritic chest pain and dyspnea that began two hours ago, shortly after landing from a 10-hour international flight. She denies fever, cough, or leg pain. No prior cardiac or pulmonary history. She takes oral contraceptives.",
        vitals: { hr: "118", bp: "108/72", rr: "24", spo2: "91% RA", temp: "37.1°C" },
        exam: "Anxious-appearing, tachypneic. Tachycardic with a regular rhythm, no murmur. Lungs clear to auscultation bilaterally. Mild jugular venous distension. No calf swelling or tenderness. Right calf circumference symmetric to left.",
        labs: [
          { name: "Troponin", value: "0.08", unit: "ng/mL", flag: "high" },
          { name: "BNP", value: "180", unit: "pg/mL", flag: "high" },
          { name: "D-dimer", value: "4,200", unit: "ng/mL", flag: "high" },
          { name: "Lactate", value: "1.4", unit: "mmol/L", flag: "normal" },
          { name: "Creatinine", value: "0.8", unit: "mg/dL", flag: "normal" },
          { name: "WBC", value: "8.9", unit: "K/µL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "assets/gifs/cp1-pe/pslax.gif", label: "RV enlargement visible even on PSLAX",
              interpretation: "PSAX and apical 4-chamber are the primary views for assessing the right ventricle, but here the RV is already visibly enlarged in this PSLAX view too, with the RV cavity taking up an abnormally large portion of the anterior far field relative to the LV. No pericardial effusion." },
            psax: { normal: false, gif: "assets/gifs/cp1-pe/psax.gif", label: "RV dilation with septal flattening — \"D-sign\"",
              interpretation: "The interventricular septum is flattened and bows into the left ventricle during systole, producing a \"D-shaped\" LV cross-section instead of the normal circle. This reflects acute RV pressure overload from pulmonary embolism." },
            apical4: { normal: false, gif: "assets/gifs/cp1-pe/apical4.gif", label: "McConnell's sign with visible RV clot",
              interpretation: "The right ventricle is dilated and larger than the left ventricle (RV:LV ratio > 1, normal is < 0.6), with akinesis of the mid RV free wall and preserved contractility of the RV apex — McConnell's sign. A mobile echogenic thrombus is also visible within the RV, confirming clot-in-transit — a dramatic and high-risk finding that changes management and prognosis." },
            subcostal4: { normal: false, gif: "assets/gifs/cp1-pe/subcostal4.gif", label: "Clot in transit",
              interpretation: "From the subcostal window, a serpentine, mobile thrombus is again visible within the dilated right heart, confirming the clot-in-transit seen on the apical view from a second angle. This window is also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/cp1-pe/anterior-right.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal pleural sliding with horizontal A-lines and no B-lines. A clear anterior lung exam in a dyspneic, hypoxic patient is a classic and important negative — it argues against pulmonary edema and pneumonia and should raise suspicion for PE." },
            anteriorLeft: { normal: true, gif: "assets/gifs/cp1-pe/anterior-left.gif", label: "Lung sliding present, A-lines",
              interpretation: "Symmetrically clear to the right side — lung sliding present, A-line pattern, no B-lines." },
            posteriorRight: { normal: true, gif: "assets/gifs/cp1-pe/plaps-right.gif", label: "PLAPS point — no effusion",
              interpretation: "No anechoic stripe above the diaphragm and no spine sign. No pleural effusion or consolidation at the posterolateral alveolar and pleural syndrome (PLAPS) point." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "Left PLAPS point is likewise clear, no effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "Morison's pouch is clear, no free fluid. Liver parenchyma appears normal." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "Splenorenal recess is clear, no free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "Bladder is normally distended, no free fluid in the pelvis." },
            ivc: { normal: false, gif: "assets/gifs/cp1-pe/ivc.gif", label: "Plethoric IVC, < 50% collapse",
              interpretation: "The IVC is dilated (> 2.1 cm) with minimal respiratory collapse (< 50% with sniff), consistent with elevated right atrial pressure from acute RV strain — fits the picture of submassive PE." }
          }
        }
      },
      {
        id: "cp2",
        title: "Sudden Left-Sided Pleuritic Pain in a Young Man",
        teaser: "22M, tall and thin, sudden sharp left chest pain and dyspnea at rest.",
        hpi: "A 22-year-old tall, thin man with no significant past medical history presents with sudden-onset sharp, left-sided chest pain and shortness of breath that began at rest about an hour ago. He denies trauma. He is an occasional smoker. No prior episodes.",
        vitals: { hr: "104", bp: "124/78", rr: "22", spo2: "94% RA", temp: "36.9°C" },
        exam: "Mildly tachypneic, in no acute distress at rest. Decreased breath sounds over the left hemithorax with hyperresonance to percussion. Trachea midline. No jugular venous distension, no subcutaneous emphysema, no tracheal deviation.",
        labs: [
          { name: "WBC", value: "8.2", unit: "K/µL", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" },
          { name: "BNP", value: "22", unit: "pg/mL", flag: "normal" },
          { name: "D-dimer", value: "310", unit: "ng/mL", flag: "normal" },
          { name: "Lactate", value: "1.1", unit: "mmol/L", flag: "normal" },
          { name: "ABG (room air)", value: "pH 7.44, pCO₂ 36, pO₂ 68", unit: "", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion. Included to confirm there is no tamponade physiology as an alternative explanation for this patient's symptoms." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening, no RV strain — argues against a large PE as the cause of his dyspnea." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal lung sliding with a horizontal A-line pattern on the unaffected right side. On M-mode this produces the normal granular \"seashore sign.\"" },
            anteriorLeft: { normal: false, gif: "assets/gifs/cp2-pneumothorax/anterior-left.gif", label: "Absent lung sliding — \"barcode sign\"",
              interpretation: "No lung sliding is seen at the left anterior chest wall, and no B-lines are present. On M-mode, the normal seashore sign is replaced by horizontal lines above and below the pleural line — the \"barcode\" or \"stratosphere\" sign — because the visceral and parietal pleura are no longer in contact. In a supine patient, free pleural air rises to the least dependent point, which is why the anterior chest is the most sensitive location to scan for pneumothorax." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "Normal, no effusion or consolidation." },
            posteriorLeft: { normal: true, gif: "assets/gifs/cp2-pneumothorax/plaps-left.gif", label: "PLAPS point — lung sliding present",
              interpretation: "Lung sliding is actually still present at this dependent, posterolateral point, even though it was absent anteriorly — the lung remains opposed to the chest wall here because the free air has risen away from this more dependent zone. Sweeping the probe between an anterior point with no sliding and a lateral point with sliding restored lets you find the \"lung point\": the exact spot where sliding starts and stops. Identifying a lung point is close to 100% specific for pneumothorax and also gives a rough sense of its size — a lung point found far laterally suggests a small pneumothorax, while one found only very anteriorly (or never found at all) suggests a larger one." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid, included for completeness in this full scan." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation — this is a simple, uncomplicated (non-tension) pneumothorax with no evidence of the obstructive shock physiology a tension pneumothorax would cause." }
          }
        }
      },
      {
        id: "cp3",
        title: "Fever, Productive Cough, and Pleuritic Pain in a Smoker with COPD",
        teaser: "71F with COPD, 3 days of productive cough, fever, and pleuritic right chest pain.",
        hpi: "A 71-year-old woman with COPD presents with three days of productive cough with yellow-green sputum, fevers, chills, and pleuritic right-sided chest pain. She reports worsening dyspnea with exertion and decreased appetite.",
        vitals: { hr: "114", bp: "118/72", rr: "24", spo2: "90% RA", temp: "38.9°C" },
        exam: "Decreased breath sounds and dullness to percussion at the right lower lung field, with crackles and bronchial breath sounds over the right base. Mild accessory muscle use. No calf swelling.",
        labs: [
          { name: "WBC", value: "16.4", unit: "K/µL", flag: "high" },
          { name: "Procalcitonin", value: "1.8", unit: "ng/mL", flag: "high" },
          { name: "Lactate", value: "1.9", unit: "mmol/L", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" },
          { name: "BNP", value: "45", unit: "pg/mL", flag: "normal" },
          { name: "Creatinine", value: "1.0", unit: "mg/dL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/cp3-pneumonia/pslax.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion. A normal cardiac exam here argues against a cardiac cause of this patient's chest pain." },
            psax: { normal: true, gif: "assets/gifs/cp3-pneumonia/psax.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/cp3-pneumonia/apical4.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/cp3-pneumonia/subcostal4.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/cp3-pneumonia/anterior-right.gif", label: "Lung sliding present, A-lines",
              interpretation: "The anterior right chest is relatively clear, with preserved lung sliding and an A-line pattern. Early or mild consolidation doesn't always reach the anterior chest — the posterolateral, gravity-dependent zones are more sensitive for lower-lobe pneumonia, which is exactly where this patient's exam findings localize." },
            anteriorLeft: { normal: true, gif: "assets/gifs/cp3-pneumonia/anterior-left.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no abnormality on the unaffected side." },
            posteriorRight: { normal: false, gif: "assets/gifs/cp3-pneumonia/plaps-right.gif", label: "Consolidation with air bronchograms — \"hepatization\"",
              interpretation: "At the right PLAPS point, the normally aerated lung is replaced by a tissue-like, echo-dense pattern resembling liver parenchyma — sonographic \"hepatization.\" Punctate or linear hyperechoic foci within it represent air bronchograms, a finding fairly specific for pneumonia over atelectasis. A thin rim of adjacent pleural fluid (a parapneumonic effusion) is also visible. This directly corresponds to the dullness, crackles, and bronchial breath sounds heard on exam at this location." },
            posteriorLeft: { normal: true, gif: "assets/gifs/cp3-pneumonia/plaps-left.gif", label: "PLAPS point — no effusion",
              interpretation: "Left PLAPS is clear, no effusion or consolidation — the process is unilateral, consistent with a lobar pneumonia rather than a diffuse process like pulmonary edema." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid, normal liver architecture." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/cp3-pneumonia/ivc.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation, consistent with euvolemia and arguing against a volume-overloaded or obstructive process as the cause of this patient's hypoxia." }
          }
        }
      },
      {
        id: "cp4",
        title: "Chest Pressure and Lightheadedness in a Man with Coronary Disease",
        teaser: "66M with prior PCI, two hours of substernal pressure and lightheadedness after standing up.",
        hpi: "A 66-year-old man with coronary artery disease (drug-eluting stent to the LAD four years ago), hypertension, and osteoarthritis presents with two hours of substernal chest pressure and lightheadedness that began when he stood up from the couch. He nearly fainted in the bathroom. He takes aspirin daily and has been taking over-the-counter naproxen several times a day for the past two weeks for knee pain. He reports mild epigastric discomfort over the past few days and fatigue. He has not noticed his stools. ECG shows sinus tachycardia with 1 mm horizontal ST depression in V4–V6 and no ST elevation. The team is discussing starting the ACS protocol.",
        vitals: { hr: "124", bp: "94/58", rr: "20", spo2: "98% RA", temp: "36.5°C" },
        exam: "Pale and diaphoretic, conjunctival pallor. Tachycardic with a regular rhythm, no murmur or rub. JVP not visible. Lungs clear bilaterally. Mild epigastric tenderness without guarding or rebound. Extremities cool with delayed capillary refill. No leg swelling. Rectal exam not yet performed.",
        labs: [
          { name: "Hemoglobin", value: "9.8", unit: "g/dL", flag: "low" },
          { name: "BUN", value: "52", unit: "mg/dL", flag: "high" },
          { name: "Creatinine", value: "1.2", unit: "mg/dL", flag: "normal" },
          { name: "Troponin", value: "0.09", unit: "ng/mL", flag: "high" },
          { name: "Lactate", value: "3.1", unit: "mmol/L", flag: "high" },
          { name: "BNP", value: "40", unit: "pg/mL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "assets/gifs/cp4-gi-bleed/pslax.mp4", label: "Small, hyperdynamic LV",
              interpretation: "The LV cavity is small and contracts vigorously, nearly obliterating in systole. There is no pericardial effusion. This is not the picture of an infarcting, failing ventricle — it is an underfilled heart working hard to maintain output. In a patient with chest pain and ST depression, a hyperdynamic LV should make you ask what is draining the tank before you call this a primary coronary event." },
            psax: { normal: true, gif: "assets/gifs/cp4-gi-bleed/psax.mp4", label: "No RV dilation or septal flattening",
              interpretation: "Round LV cross-section with no septal flattening (no D-sign) and no RV dilation, which argues against a large PE as the cause of his tachycardia and hypotension." },
            apical4: { normal: false, gif: "assets/gifs/cp4-gi-bleed/apical4.mp4", label: "Small, vigorously contracting chambers",
              interpretation: "Both ventricles are small and hyperdynamic, with no regional wall motion abnormality evident and no pericardial effusion. A large acute MI severe enough to cause hypotension would usually produce a visible regional wall motion abnormality or reduced function. Here the pump is empty, not failing. Together with the ST depression and troponin bump, this points toward demand ischemia (type 2 MI) from a supply–demand mismatch rather than plaque rupture." },
            subcostal4: { normal: true, gif: "assets/gifs/cp4-gi-bleed/subcostal4.mp4", label: "No pericardial effusion",
              interpretation: "No pericardial effusion, so tamponade is not the cause of his hypotension. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/cp4-gi-bleed/anterior-right.mp4", label: "Lung sliding present, A-lines",
              interpretation: "Normal lung sliding with an A-line pattern and no B-lines. No pulmonary edema and no pneumothorax." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "Symmetrically normal. Dry lungs plus a small, hyperdynamic heart is a reassuring combination when you are about to give volume or blood: there is no sign he will tip into pulmonary edema." },
            posteriorRight: { normal: true, gif: "assets/gifs/cp4-gi-bleed/plaps-right.mp4", label: "PLAPS point — no effusion",
              interpretation: "No pleural effusion or consolidation at the right PLAPS point." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No pleural effusion or consolidation at the left PLAPS point. No hemothorax." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid in Morison's pouch",
              interpretation: "Morison's pouch is clear. Important pitfall: blood inside the GI tract is not free intraperitoneal fluid and will not appear on a FAST exam. A negative FAST rules out large hemoperitoneum, not hemorrhage." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "Splenorenal recess is clear, no free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis. With intraperitoneal bleeding excluded and a ruptured AAA not suggested by his presentation, the history (aspirin plus heavy NSAID use, epigastric discomfort) and the elevated BUN with a normal creatinine point toward an upper GI bleed. Do the rectal exam now." },
            ivc: { normal: false, gif: "assets/gifs/cp4-gi-bleed/ivc.gif", label: "Small, collapsing IVC",
              interpretation: "The IVC is small and collapses nearly completely with respiration, consistent with low right atrial pressure and intravascular depletion. Putting it together: an empty heart and an empty IVC with dry lungs and a negative FAST in a hypotensive patient on aspirin and NSAIDs is hemorrhagic shock from a likely upper GI bleed until proven otherwise. Management shifts away from the ACS protocol — do not start anticoagulation. Place two large-bore IVs, send a type and crossmatch, start transfusion, begin an IV proton pump inhibitor, and involve GI for endoscopy. Hold aspirin for now and discuss timing of resumption with cardiology given his stent. Note that the initial hemoglobin often underestimates acute blood loss because equilibration takes hours. Repeat the IVC and cardiac views to track his response to resuscitation." }
          }
        }
      },
      {
        id: "cp5",
        title: "Positional Chest Pain and Lightheadedness in a Woman with Breast Cancer",
        teaser: "47F with metastatic breast cancer, one week of sharp chest pain that eases when leaning forward, now dyspneic and lightheaded.",
        hpi: "A 47-year-old woman with metastatic breast cancer (known lung and bone metastases, on chemotherapy) presents with one week of sharp, substernal chest pain that is worse lying flat and eases when she sits up and leans forward. Over the past two days she has become progressively short of breath, cannot lie flat, and felt lightheaded and nearly passed out while walking to the bathroom this morning. She denies fever, cough, leg swelling, or recent travel. ECG shows sinus tachycardia with low QRS voltage and beat-to-beat variation in QRS amplitude.",
        vitals: { hr: "128", bp: "92/76", rr: "26", spo2: "94% RA", temp: "37.2°C" },
        exam: "Anxious, sitting upright and leaning forward. Jugular venous distension to the angle of the jaw while sitting upright. Heart sounds distant; no murmur. Pulsus paradoxus of 22 mmHg. Lungs clear to auscultation bilaterally. Extremities cool, no leg edema.",
        labs: [
          { name: "Troponin", value: "0.03", unit: "ng/mL", flag: "high" },
          { name: "BNP", value: "110", unit: "pg/mL", flag: "high" },
          { name: "Lactate", value: "3.4", unit: "mmol/L", flag: "high" },
          { name: "Creatinine", value: "1.4", unit: "mg/dL", flag: "high" },
          { name: "Hemoglobin", value: "11.2", unit: "g/dL", flag: "low" },
          { name: "WBC", value: "7.6", unit: "K/µL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "assets/gifs/cp5-tamponade/pslax.mp4", label: "Large pericardial effusion",
              interpretation: "A large anechoic (black) pericardial effusion surrounds the heart. In the PSLAX view, the key landmark is the descending thoracic aorta: pericardial fluid tracks anterior to it, between the aorta and the left atrium, while a left pleural effusion stays posterior to it. A large effusion in a hypotensive, tachycardic patient with JVD is tamponade until proven otherwise — the next question is whether the fluid is compressing the right heart." },
            psax: { normal: false, gif: "assets/gifs/cp5-tamponade/psax.mp4", label: "Circumferential effusion around the LV",
              interpretation: "In short axis, the effusion wraps all the way around the ventricles. A circumferential effusion is more likely to be hemodynamically significant than a small, loculated pocket. Tamponade is a clinical and physiologic diagnosis, not a size cutoff — what matters is whether pericardial pressure exceeds right-sided filling pressure. Watch the right ventricular free wall for diastolic collapse." },
            apical4: { normal: false, gif: "assets/gifs/cp5-tamponade/apical4.mp4", label: "Effusion with tamponade physiology",
              interpretation: "The apical view shows the effusion and the right-sided chambers in the same frame, which makes it a good window to look for the classic tamponade signs: right atrial collapse during ventricular systole (most sensitive, especially if it lasts more than a third of the cardiac cycle) and right ventricular collapse during diastole (more specific). Exaggerated respiratory swinging of the heart can accompany very large effusions and is the echo correlate of electrical alternans on her ECG." },
            subcostal4: { normal: false, gif: "assets/gifs/cp5-tamponade/subcostal4.mp4", label: "Effusion with right heart compression",
              interpretation: "The subxiphoid view is often the best window in a sick patient who can't lie flat, and it is the classic approach for pericardiocentesis. Here the effusion is seen between the liver and the right ventricle, with the right heart compressed by the surrounding fluid. This window also gives the depth and location of the largest fluid pocket for a procedural plan. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/cp5-tamponade/anterior-right.mp4", label: "Lung sliding present, A-lines",
              interpretation: "Normal lung sliding with an A-line pattern and no B-lines. Clear lungs are an important clue: despite her dyspnea, orthopnea, and JVD, there is no pulmonary edema. Elevated venous pressure with dry lungs points away from left heart failure and toward an obstructive cause — tamponade, massive PE, or tension pneumothorax." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Lung sliding present on the left as well, so no pneumothorax. Combined with the normal right side, tension pneumothorax is excluded as the cause of her obstructive physiology." },
            posteriorRight: { normal: true, gif: "assets/gifs/cp5-tamponade/plaps-right.mp4", label: "PLAPS point — no effusion",
              interpretation: "No pleural effusion or consolidation at the right PLAPS point. Despite her known lung metastases, there is no malignant pleural effusion here to explain her dyspnea." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No left pleural effusion. This confirms that the fluid seen around the heart on the PSLAX view is pericardial, not pleural." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "Morison's pouch is clear, no free fluid." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "Splenorenal recess is clear, no free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "assets/gifs/cp5-tamponade/ivc.mp4", label: "Plethoric IVC, minimal collapse",
              interpretation: "The IVC is dilated with little to no respiratory collapse, reflecting elevated right atrial pressure. A plethoric IVC is very sensitive for tamponade — a small, collapsing IVC makes tamponade unlikely — though it is not specific, since right heart failure, PE, and volume overload also plethorize the IVC. Putting it together: a large circumferential effusion, right heart compression, a plethoric IVC, clear lungs, hypotension, and pulsus paradoxus is cardiac tamponade, most likely a malignant pericardial effusion. Management: call cardiology for urgent pericardiocentesis (or surgery for a pericardial window). While arranging drainage, support preload with a cautious fluid bolus, and avoid positive-pressure ventilation and intubation if at all possible — sedation and positive intrathoracic pressure can precipitate cardiac arrest. Send the fluid for cytology." }
          }
        }
      }
    ],
    "shortness-of-breath": [
      {
        id: "sob1",
        title: "Three Days of Worsening Dyspnea and Orthopnea",
        teaser: "72M, progressive dyspnea, orthopnea, and leg swelling with a history of MI.",
        hpi: "A 72-year-old man with a history of myocardial infarction five years ago presents with three days of progressively worsening shortness of breath, now unable to lie flat, with two-pillow orthopnea and paroxysmal nocturnal dyspnea. He reports increasing bilateral leg swelling and a 4-pound weight gain this week. He admits to missing his diuretic doses.",
        vitals: { hr: "105", bp: "162/94", rr: "28", spo2: "88% RA", temp: "36.8°C" },
        exam: "Visibly dyspneic, using accessory muscles. Elevated jugular venous pressure to the angle of the jaw. Bibasilar crackles two-thirds up both lung fields. An S3 gallop is audible. 2+ pitting edema to the mid-shin bilaterally.",
        labs: [
          { name: "BNP", value: "1,450", unit: "pg/mL", flag: "high" },
          { name: "Troponin", value: "0.04", unit: "ng/mL", flag: "high" },
          { name: "Creatinine", value: "1.6", unit: "mg/dL", flag: "high" },
          { name: "Lactate", value: "1.6", unit: "mmol/L", flag: "normal" },
          { name: "WBC", value: "7.4", unit: "K/µL", flag: "normal" },
          { name: "Sodium", value: "133", unit: "mEq/L", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "assets/gifs/sob1-chf/pslax.gif", label: "Dilated LV, reduced contractility",
              interpretation: "The left ventricle is dilated with visibly reduced wall excursion and a narrow separation between the mitral valve E-point and septum (increased EPSS), consistent with a reduced ejection fraction." },
            psax: { normal: false, gif: "assets/gifs/sob1-chf/psax.gif", label: "Reduced fractional shortening",
              interpretation: "The LV cavity fails to fully close down in systole — reduced fractional area change confirms globally depressed systolic function." },
            apical4: { normal: false, gif: "assets/gifs/sob1-chf/apical4.gif", label: "Global hypokinesis, dilated LA",
              interpretation: "All four walls contract poorly (global hypokinesis) with a visually estimated EF in the 25–30% range. The left atrium is dilated, consistent with chronically elevated filling pressures." },
            subcostal4: { normal: false, gif: "assets/gifs/sob1-chf/subcostal4.gif", label: "Confirms reduced EF",
              interpretation: "Same globally reduced systolic function seen from the subcostal window, useful when apical windows are technically difficult. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "assets/gifs/sob1-chf/anterior-right.gif", label: "Diffuse B-lines — \"white lung\"",
              interpretation: "Three or more confluent B-lines per rib space across multiple anterior zones, coalescing into a \"white lung\" pattern. This reflects interstitial and alveolar edema." },
            anteriorLeft: { normal: false, gif: "assets/gifs/sob1-chf/anterior-left.gif", label: "Diffuse B-lines — \"white lung\"",
              interpretation: "Mirrors the right side — diffuse, bilateral, symmetric B-lines. Bilateral symmetric B-lines strongly favor a cardiogenic cause over a focal pneumonia." },
            posteriorRight: { normal: false, gif: "assets/gifs/sob1-chf/plaps-right.gif", label: "PLAPS point — pleural effusion",
              interpretation: "An anechoic space is seen above the diaphragm with a visible spine sign, consistent with a right pleural effusion and associated compressive atelectasis." },
            posteriorLeft: { normal: false, gif: "assets/gifs/sob1-chf/plaps-left.gif", label: "PLAPS point — B-lines and pleural effusion",
              interpretation: "A smaller but present left pleural effusion is seen alongside confluent B-lines in the adjacent aerated lung — the combination of effusion and B-lines at the same PLAPS point is a common real-world pattern in decompensated heart failure, consistent with bilateral disease." }
          },
          abdomen: {
            ruq: { normal: false, gif: "assets/gifs/common/ruq-normal.gif", label: "Dilated hepatic veins, hepatic congestion",
              interpretation: "The hepatic veins are dilated and plethoric where they drain into the IVC, a sign of passive hepatic congestion from elevated right-sided filling pressures. No free fluid." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "Spleen and splenorenal recess appear normal, no free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "assets/gifs/sob1-chf/ivc.gif", label: "Plethoric, non-collapsing IVC",
              interpretation: "The IVC is dilated (> 2.1 cm) with less than 50% collapse on sniff, indicating a markedly elevated right atrial pressure and volume-overloaded state — consistent with decompensated heart failure rather than a volume-depleted process." }
          }
        }
      },
      {
        id: "sob2",
        title: "Progressive Dyspnea and Abdominal Distension in Cirrhosis",
        teaser: "58M with alcoholic cirrhosis, 5 days of dyspnea, orthopnea, and worsening ascites after a sodium load.",
        hpi: "A 58-year-old man with known alcoholic cirrhosis (Child-Pugh C) presents with progressive dyspnea, orthopnea, and lower extremity edema over five days. He reports increased dietary sodium intake at a family gathering and has missed several doses of his diuretics. Family notes his abdominal distension has worsened.",
        vitals: { hr: "108", bp: "102/64", rr: "26", spo2: "88% RA", temp: "37.1°C" },
        exam: "Bibasilar crackles, jugular venous distension, a tense and distended abdomen, 3+ pitting edema bilaterally, scleral icterus, and spider angiomata.",
        labs: [
          { name: "BNP", value: "110", unit: "pg/mL", flag: "normal" },
          { name: "Albumin", value: "2.1", unit: "g/dL", flag: "low" },
          { name: "Total bilirubin", value: "3.8", unit: "mg/dL", flag: "high" },
          { name: "INR", value: "1.9", unit: "", flag: "high" },
          { name: "Creatinine", value: "1.3", unit: "mg/dL", flag: "high" },
          { name: "Sodium", value: "129", unit: "mEq/L", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/pslax.gif", label: "Normal-to-hyperdynamic LV, preserved EF",
              interpretation: "The left ventricle is normal in size with vigorous, hyperdynamic contractility and a preserved ejection fraction — the high-output physiology often seen in cirrhosis. This is an important negative: the pulmonary edema and effusions in this patient are not being driven by pump failure." },
            psax: { normal: true, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/psax.gif", label: "Normal RV and LV size, vigorous contraction",
              interpretation: "Normal circular LV cross section with a brisk fractional area change, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/apical4.gif", label: "Preserved EF, no chamber enlargement",
              interpretation: "All four chambers are normal in size with preserved, hyperdynamic systolic function and no pericardial effusion. This is a normal — even hyperdynamic — heart in a patient with a low BNP, pointing away from a cardiogenic cause for this presentation." },
            subcostal4: { normal: true, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/subcostal4.gif", label: "Normal, used for IVC access",
              interpretation: "Confirms preserved function from the subcostal window. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/anterior-right.gif", label: "Diffuse B-lines",
              interpretation: "Multiple confluent B-lines are present, reflecting interstitial edema from third-spacing of fluid in the setting of severe hypoalbuminemia (albumin 2.1) plus this week's sodium load and missed diuretic doses — not elevated cardiac filling pressure." },
            anteriorLeft: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/anterior-left.gif", label: "Diffuse B-lines",
              interpretation: "Bilateral, roughly symmetric B-lines, matching the right side." },
            posteriorRight: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/plaps-right.gif", label: "PLAPS point — pleural effusion (hepatic hydrothorax)",
              interpretation: "A right pleural effusion is seen at the PLAPS point. In decompensated cirrhosis this is classically a hepatic hydrothorax — ascitic fluid crossing into the pleural space through small diaphragmatic defects — and it can occur even without a large amount of B-line-pattern pulmonary edema." },
            posteriorLeft: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/plaps-left.gif", label: "PLAPS point — smaller pleural effusion",
              interpretation: "A smaller effusion is also present on the left, consistent with the bilateral third-spacing seen in decompensated cirrhosis with severe hypoalbuminemia." }
          },
          abdomen: {
            ruq: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/ruq-ascites-effusion.gif", label: "Ascites and a nodular liver surface",
              interpretation: "A large amount of free fluid (ascites) surrounds the liver, and the liver itself seems compressed" },
            luq: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/luq-ascites.gif", label: "Ascites tracking around the spleen",
              interpretation: "Free fluid is also seen in the splenorenal recess, confirming this is large-volume ascites rather than an isolated perihepatic collection." },
            suprapubic: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/suprapubic-ascites.gif", label: "Ascites layering in the pelvis",
              interpretation: "Free fluid layers in the most dependent pelvic recess, as expected with large-volume ascites in a supine patient." },
            ivc: { normal: false, gif: "assets/gifs/sob2-cirrhosis-pulm-edema/ivc.gif", label: "Dilated IVC from intra-abdominal pressure",
              interpretation: "The IVC appears dilated with reduced respiratory collapse — but in this context that reflects the mechanical effect of markedly elevated intra-abdominal pressure from tense ascites compressing the IVC, not an elevated right atrial pressure from cardiac dysfunction. Pairing this with a hyperdynamic, structurally normal heart is what distinguishes this case from cardiogenic pulmonary edema." }
          }
        }
      },
      {
        id: "sob3",
        title: "Weeks of Dyspnea and Weight Loss in a Long-Time Smoker",
        teaser: "64M, 40-pack-year smoker, weeks of dyspnea on exertion, dry cough, and unintentional weight loss.",
        hpi: "A 64-year-old man with a 40-pack-year smoking history presents with several weeks of progressive dyspnea on exertion, a dry cough, unintentional 15-pound weight loss, and vague right-sided chest discomfort. He has no prior cancer diagnosis.",
        vitals: { hr: "96", bp: "128/78", rr: "22", spo2: "91% RA", temp: "37.3°C" },
        exam: "Decreased breath sounds and dullness to percussion over the left lower-to-mid lung fields, decreased tactile fremitus, and mild tracheal deviation away from the effusion. Cachectic appearance. No significant lymphadenopathy palpated.",
        labs: [
          { name: "BNP", value: "38", unit: "pg/mL", flag: "normal" },
          { name: "Albumin", value: "3.0", unit: "g/dL", flag: "low" },
          { name: "Hemoglobin", value: "10.4", unit: "g/dL", flag: "low" },
          { name: "WBC", value: "9.8", unit: "K/µL", flag: "normal" },
          { name: "Lactate", value: "1.5", unit: "mmol/L", flag: "normal" },
          { name: "Creatinine", value: "0.9", unit: "mg/dL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/pslax.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion. A normal, low-BNP cardiac exam argues strongly against heart failure as the cause of this patient's dyspnea and effusion." },
            psax: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/psax.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/apical4.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/subcostal4.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/anterior-right.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal on the unaffected side." },
            anteriorLeft: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/anterior-left.gif", label: "Lung sliding present, A-lines",
              interpretation: "The left anterior chest is relatively clear. A large effusion is gravity-dependent and layers posteriorly and inferiorly in a semi-recumbent patient, so the anterior chest can look deceptively normal — the posterolateral PLAPS point is where this pathology declares itself." },
            posteriorRight: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/plaps-right.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion on the unaffected right side." },
            posteriorLeft: { normal: false, gif: "assets/gifs/sob3-malignant-effusion/plaps-left.gif", label: "Large complex pleural effusion with atelectatic lung",
              interpretation: "A large anechoic-to-complex pleural effusion is seen at the left PLAPS point, with a wedge of compressed, atelectatic lung tissue floating within it — sometimes described as the \"jellyfish sign\" as it billows with respiration and cardiac pulsation. Given this patient's smoking history, weight loss, and lack of any cardiac or renal explanation, a malignant pleural effusion should be high on the differential; thoracentesis with cytology is the next step." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/RUQ-Normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid and no obvious hepatic lesions on this screening view, though this is not a substitute for dedicated cross-sectional imaging if metastatic disease is suspected." },
            luq: { normal: false, gif: "assets/gifs/sob3-malignant-effusion/luq-mass.gif", label: "Solid mass with paramalignant effusion",
              interpretation: "A solid, echogenic mass is seen above the diaphragm adjacent to a paramalignant pleural effusion — findings concerning for pleural or subdiaphragmatic metastatic disease in this patient's malignant effusion workup." },
            suprapubic: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/pelvic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis — the fluid burden in this patient is confined to the left pleural space rather than reflecting a systemic third-spacing process." },
            ivc: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/ivc.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation, another point against a cardiac or volume-overload explanation for this patient's effusion and dyspnea." }
          }
        }
      },
      {
        id: "sob4",
        title: "Sudden Dyspnea in a Teenage Basketball Player",
        teaser: "16M, tall and thin, sudden dyspnea and mild right chest discomfort during a game.",
        hpi: "A 16-year-old boy with no significant past medical history is brought in after developing sudden dyspnea and mild right-sided chest discomfort while playing basketball. He denies trauma, collision, or being struck in the chest. No fever, cough, or prior episodes. He is tall and thin-built.",
        vitals: { hr: "108", bp: "118/74", rr: "24", spo2: "93% RA", temp: "36.8°C" },
        exam: "Mildly tachypneic, comfortable at rest. Decreased breath sounds over the right hemithorax with hyperresonance to percussion. Trachea midline. No jugular venous distension, no subcutaneous emphysema.",
        labs: [
          { name: "WBC", value: "7.6", unit: "K/µL", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" },
          { name: "BNP", value: "18", unit: "pg/mL", flag: "normal" },
          { name: "D-dimer", value: "280", unit: "ng/mL", flag: "normal" },
          { name: "Lactate", value: "1.0", unit: "mmol/L", flag: "normal" },
          { name: "ABG (room air)", value: "pH 7.45, pCO₂ 35, pO₂ 71", unit: "", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion — no tamponade physiology to explain his symptoms." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "assets/gifs/sob4-teen-pneumothorax/anterior-right.gif", label: "Absent lung sliding — \"barcode sign\"",
              interpretation: "No lung sliding is seen at the right anterior chest wall, with loss of the normal seashore sign on M-mode in favor of horizontal \"barcode\" lines. In a supine or reclined patient, free pleural air rises to this least dependent point first, which is why the anterior chest is the most sensitive location to scan for a pneumothorax." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal on the unaffected side." },
            posteriorRight: { normal: true, gif: "assets/gifs/sob4-teen-pneumothorax/plaps-right.gif", label: "PLAPS point — lung sliding present",
              interpretation: "Lung sliding is present at this more dependent, posterolateral point even though it was absent anteriorly. Sweeping the probe between the two lets you find the transition — the \"lung point\" — which confirms the diagnosis and gives a rough sense of size: a point found this far laterally suggests a small-to-moderate, hemodynamically simple pneumothorax rather than a large or tension one." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "Normal, no effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid, included for completeness in this full scan." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-2.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation — a simple, uncomplicated pneumothorax with no evidence of the obstructive shock physiology a tension pneumothorax would cause." }
          }
        }
      },
      {
        id: "sob5",
        title: "New Hypoxia and Fever After a Witnessed Aspiration",
        teaser: "82F, POD5 from hip fracture repair, witnessed aspiration event, now febrile and hypoxic.",
        hpi: "An 82-year-old woman, post-operative day 5 from a hip fracture repair, was witnessed by nursing staff to cough and choke while eating dinner, with concern for aspiration. Over the following 24 hours she developed fever, a new productive cough, and increasing supplemental oxygen requirements. She has known mild baseline dysphagia.",
        vitals: { hr: "110", bp: "128/70", rr: "26", spo2: "89% RA", temp: "38.6°C" },
        exam: "Acutely confused (new from baseline per family). Crackles and decreased breath sounds at the right lung base with dullness to percussion. Poor, weak cough effort. No calf swelling.",
        labs: [
          { name: "WBC", value: "17.2", unit: "K/µL", flag: "high" },
          { name: "Procalcitonin", value: "2.4", unit: "ng/mL", flag: "high" },
          { name: "Lactate", value: "2.1", unit: "mmol/L", flag: "high" },
          { name: "Creatinine", value: "1.3", unit: "mg/dL", flag: "high" },
          { name: "BNP", value: "60", unit: "pg/mL", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion — helps exclude a cardiac cause for her new hypoxia and confusion." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion. A low BNP and a structurally normal heart argue against a cardiac decompensation as the explanation." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "The anterior right chest is relatively clear. Aspiration pneumonia classically settles in gravity-dependent, posterior segments — especially the right lower lobe, given the more vertical right mainstem bronchus — so the anterior chest can look deceptively normal here." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no abnormality on the left." },
            posteriorRight: { normal: false, gif: "assets/gifs/sob5-aspiration-pneumonia/plaps-right.gif", label: "Consolidation with air bronchograms — \"hepatization\"",
              interpretation: "At the right PLAPS point, aerated lung is replaced by a tissue-like, echo-dense pattern resembling liver parenchyma, with punctate hyperechoic air bronchograms scattered within it — findings consistent with a dependent, aspiration-pattern pneumonia. A thin rim of adjacent pleural fluid is also visible. This directly corresponds to the crackles and dullness heard on exam at the right base." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "Left PLAPS is clear — the process is unilateral and right-sided, consistent with the expected anatomic pattern of aspiration." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid, normal liver architecture." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation, consistent with adequate intravascular volume despite her reduced oral intake since surgery." }
          }
        }
      },
      {
        id: "sob6",
        title: "Acute-on-Chronic Dyspnea in a Patient with COPD",
        teaser: "67M with severe COPD on home O2, 2 days of worsening dyspnea and sputum production.",
        hpi: "A 67-year-old man with severe COPD on 2L home oxygen presents with two days of worsening dyspnea, increased sputum volume, and a change in sputum color from clear to yellow-green, similar in character to his prior exacerbations. No fever, no chest pain, no leg swelling.",
        vitals: { hr: "102", bp: "138/84", rr: "26", spo2: "87% RA (baseline 91% on 2L)", temp: "37.0°C" },
        exam: "Diffuse expiratory wheezing bilaterally with a prolonged expiratory phase, decreased breath sounds throughout, barrel-shaped chest, pursed-lip breathing, and use of accessory muscles. No jugular venous distension, no peripheral edema.",
        labs: [
          { name: "WBC", value: "11.8", unit: "K/µL", flag: "high" },
          { name: "BNP", value: "52", unit: "pg/mL", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" },
          { name: "ABG", value: "pH 7.32, pCO₂ 62, pO₂ 55", unit: "", flag: "low" },
          { name: "Lactate", value: "1.4", unit: "mmol/L", flag: "normal" },
          { name: "Creatinine", value: "0.9", unit: "mg/dL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion. A structurally normal heart with a low BNP argues against a cardiogenic contribution to his dyspnea." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section. No septal flattening — while chronic severe COPD can eventually cause cor pulmonale with RV strain, that is not seen here." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/sob6-copd/anterior-right.gif", label: "Lung sliding present, A-lines only",
              interpretation: "A clean A-line pattern with preserved lung sliding and no B-lines. This is the key finding of this whole case: point-of-care lung ultrasound here is essentially normal, and that normal exam is itself the useful information — it argues against pulmonary edema, pneumonia, effusion, or pneumothorax as the cause of his dyspnea, leaving an obstructive process (his known COPD) as the most likely explanation by exclusion." },
            anteriorLeft: { normal: true, gif: "assets/gifs/sob6-copd/anterior-left.gif", label: "Lung sliding present, A-lines only",
              interpretation: "Symmetric, equally clear A-line pattern on the left." },
            posteriorRight: { normal: true, gif: "assets/gifs/sob6-copd/plaps-right.gif", label: "PLAPS point — normal, with mirror-image artifact",
              interpretation: "No effusion or consolidation. Above the diaphragm, a mirror-image artifact is visible — liver echotexture appears to be duplicated on the thoracic side of the diaphragm. This is a normal artifact caused by the diaphragm's strong reflectivity, and it's actually a reassuring sign: it only forms when the lung above the diaphragm is well-aerated. Its presence is further evidence against an effusion, which would replace the artifact with true fluid. Don't mistake the mirrored liver tissue for a thoracic mass or consolidation." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid. No hepatic venous congestion, another point against a right heart failure component." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-2.gif", label: "Normal caliber, exaggerated respiratory variation",
              interpretation: "The IVC is normal in caliber, but shows exaggerated collapse with inspiration — a common pitfall in obstructive lung disease, where the deep, forceful negative intrathoracic pressure swings of labored breathing can make the IVC collapse briskly even in a euvolemic patient. Don't mistake this pattern for hypovolemia in a patient working this hard to breathe; interpret IVC collapse in the context of the patient's respiratory effort." }
          }
        }
      },
      {
        id: "sob7",
        title: "Worsening Fever and Work of Breathing After Bronchiolitis",
        teaser: "18-month-old, 4 days of bronchiolitis symptoms, now with new fever and focal exam findings.",
        hpi: "An 18-month-old boy presents with four days of rhinorrhea, cough, and low-grade fever consistent with viral bronchiolitis. Over the last 24 hours he has developed a higher fever, increased work of breathing, grunting noted by his parents, and decreased oral intake and wet diapers.",
        vitals: { hr: "168", bp: "92/58", rr: "52", spo2: "90% RA", temp: "39.2°C" },
        exam: "Nasal flaring with subcostal and intercostal retractions. Diffuse wheezing and scattered crackles bilaterally, with focally decreased breath sounds and coarse crackles at the right lower posterior lung field. Tachypneic, mildly lethargic but consolable.",
        labs: [
          { name: "WBC", value: "15.6", unit: "K/µL", flag: "high" },
          { name: "CRP", value: "4.8", unit: "mg/dL", flag: "high" },
          { name: "RSV/viral panel", value: "positive (RSV)", unit: "", flag: "high" },
          { name: "Lactate", value: "2.0", unit: "mmol/L", flag: "high" },
          { name: "Blood culture", value: "pending", unit: "", flag: "normal" },
          { name: "Creatinine", value: "0.3", unit: "mg/dL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility for age, no pericardial effusion. His tachycardia is proportional to fever and respiratory distress rather than reflecting primary cardiac disease." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening or RV strain." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab, though in an active toddler this view (like the others) can be technically limited by patient cooperation." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "assets/gifs/sob7-pediatric-pneumonia/anterior-right.gif", label: "Scattered, patchy B-lines",
              interpretation: "Multiple non-confluent B-lines are scattered across this zone rather than forming the dense, coalescent \"white lung\" pattern of pulmonary edema. This patchy, multifocal B-line pattern is typical of viral bronchiolitis, reflecting small airway inflammation and patchy atelectasis rather than diffuse alveolar flooding." },
            anteriorLeft: { normal: false, gif: "assets/gifs/sob7-pediatric-pneumonia/anterior-left.gif", label: "Scattered, patchy B-lines",
              interpretation: "A similar patchy B-line pattern is seen on the left, consistent with the diffuse, bilateral nature of viral bronchiolitis." },
            posteriorRight: { normal: false, gif: "assets/gifs/sob7-pediatric-pneumonia/plaps-right.gif", label: "Focal consolidation with an irregular border — \"shred sign\"",
              interpretation: "In contrast to the patchy, diffuse B-lines elsewhere, this posterolateral zone shows a discrete area of tissue-like consolidation with a jagged, irregular border where it meets aerated lung — the \"shred\" or \"fractal\" sign, a focal finding rather than the diffuse pattern of bronchiolitis alone. This is the sonographic correlate of the focal crackles and decreased breath sounds heard on exam at this location, and is the key finding distinguishing a superimposed focal bacterial pneumonia from bronchiolitis alone." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "Clear at this point, no effusion or consolidation — the focal bacterial process appears confined to the right side, with the left lung showing only the background bronchiolitis pattern seen anteriorly rather than a second focal complication." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid, normal liver architecture for age." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis; a full bladder can also serve as a rough acoustic window in small children." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation. This view is often the most technically difficult to obtain well in a squirming toddler — don't over-interpret a suboptimal window, and consider clinical signs of hydration status (wet diapers, tears, mucous membranes) alongside it." }
          }
        }
      }
    ],

    /* ======================================================================
       ACUTE KIDNEY INJURY
       ====================================================================== */
    "aki": [
      {
        id: "aki1",
        title: "Decreased Urine Output and Suprapubic Fullness",
        teaser: "74M with BPH, two days of decreased urine output and lower abdominal fullness.",
        hpi: "A 74-year-old man with known benign prostatic hyperplasia presents with two days of progressively decreasing urine output and a sensation of lower abdominal fullness and pressure. He reports a weak urinary stream and straining to void over the past several months. No fever, no flank pain, no hematuria. Not currently on an indwelling catheter.",
        vitals: { hr: "88", bp: "138/82", rr: "16", spo2: "98% RA", temp: "37.0°C" },
        exam: "Comfortable at rest. A firm, tender, dome-shaped fullness is palpated in the suprapubic region, dull to percussion. Mild bilateral costovertebral angle tenderness. No peripheral edema. No skin turgor changes.",
        labs: [
          { name: "Creatinine", value: "3.4", unit: "mg/dL (baseline 1.0)", flag: "high" },
          { name: "BUN", value: "58", unit: "mg/dL", flag: "high" },
          { name: "Potassium", value: "5.3", unit: "mEq/L", flag: "high" },
          { name: "Sodium", value: "138", unit: "mEq/L", flag: "normal" },
          { name: "Urinalysis", value: "bland, no blood/protein", unit: "", flag: "normal" },
          { name: "WBC", value: "7.1", unit: "K/µL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal chamber size and systolic function, no pericardial effusion." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Circular LV cross-section, no septal flattening, normal RV size." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes, normal systolic function, no effusion. A normal cardiac exam here helps rule against a cardiorenal component." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Confirms normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal A-line pattern, no B-lines — argues against a volume-overloaded state." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "Symmetric normal exam to the left side." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Moderate right hydronephrosis",
              interpretation: "The right renal collecting system is dilated, with separation and rounding of the central renal pelvis and calyces — the \"bear claw\" appearance of moderate hydronephrosis. Cortex is preserved." },
            luq: { normal: false, gif: "", label: "Mild left hydronephrosis",
              interpretation: "Mild dilation of the left renal pelvis, less pronounced than the right side but confirming a bilateral, and therefore likely bladder-outlet or urethral, level of obstruction." },
            suprapubic: { normal: false, gif: "", label: "Markedly distended bladder",
              interpretation: "The bladder is markedly distended with an estimated volume well over 600 mL, consistent with bladder outlet obstruction from BPH. Post-void residual measurement and Foley catheter placement are indicated." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-2.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC diameter with > 50% collapse on sniff, consistent with euvolemia. Supports a post-renal (obstructive) rather than pre-renal etiology for this AKI." }
          }
        }
      }
    ],

    /* ======================================================================
       ABDOMINAL PAIN
       ====================================================================== */
    "abdominal-pain": [
      {
        id: "ap1",
        title: "Right Upper Quadrant Pain After a Fatty Meal",
        teaser: "45F, one day of RUQ pain, nausea, and fever after a fatty meal.",
        hpi: "A 45-year-old woman presents with one day of constant right upper quadrant pain that began a few hours after a large, fatty meal. She reports nausea, two episodes of vomiting, and subjective fevers. No prior similar episodes, no jaundice, no dark urine or pale stools.",
        vitals: { hr: "102", bp: "118/76", rr: "18", spo2: "97% RA", temp: "38.4°C" },
        exam: "Uncomfortable, guarding the right upper quadrant. Focal tenderness to palpation in the RUQ with a positive sonographic and clinical Murphy's sign (inspiratory arrest with palpation). No rebound or peritoneal signs. No scleral icterus.",
        labs: [
          { name: "WBC", value: "14.8", unit: "K/µL", flag: "high" },
          { name: "AST/ALT", value: "68 / 74", unit: "U/L", flag: "high" },
          { name: "Total bilirubin", value: "0.9", unit: "mg/dL", flag: "normal" },
          { name: "Lipase", value: "42", unit: "U/L", flag: "normal" },
          { name: "Lactate", value: "1.3", unit: "mmol/L", flag: "normal" },
          { name: "hCG", value: "negative", unit: "", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal cardiac exam, included here for completeness and to establish this as the patient's baseline." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No abnormality." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "No abnormality." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "No abnormality. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no evidence of a right basilar process mimicking RUQ pain." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No right pleural effusion — helps exclude a basilar pneumonia as the cause of this patient's pain." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No abnormality." }
          },
          abdomen: {
            ruq: { normal: false, gif: "assets/gifs/ap1-cholecystitis/ruq-cholecystitis.gif", label: "Gallstones, wall thickening, sonographic Murphy's sign",
              interpretation: "A mobile, echogenic focus with posterior acoustic shadowing is seen within the gallbladder lumen, consistent with a gallstone. The gallbladder wall measures greater than 3 mm with a striated appearance, and a thin rim of pericholecystic fluid is present. Direct probe pressure over the gallbladder reproduces the patient's pain — a positive sonographic Murphy's sign. Together these findings are consistent with acute cholecystitis." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "Normal spleen, no free fluid",
              interpretation: "Normal splenic parenchyma, no free fluid in the splenorenal recess." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis, normal bladder." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation." }
          }
        }
      },
      {
        id: "ap2",
        title: "Unrestrained Driver After a Motor Vehicle Collision",
        teaser: "29M, hypotensive after a high-speed MVC with right-sided abdominal tenderness.",
        hpi: "A 29-year-old man is brought in by EMS after an unrestrained, high-speed motor vehicle collision with steering wheel intrusion. He was extricated after 20 minutes. He complains of right-sided abdominal and lower chest pain and feels lightheaded. He has no past medical history and takes no medications. Primary survey: airway patent, breath sounds equal bilaterally, weak radial pulses.",
        vitals: {
          hr: "128",
          bp: "82/48",
          rr: "26",
          spo2: "96% on NRB",
          temp: "36.1°C"
        },
        exam: "Pale, diaphoretic, anxious but following commands (GCS 15). Abrasion over the lower right chest wall with tenderness over right ribs 9-11. Abdomen is tender and guarded in the right upper quadrant with early distension. Pelvis stable to compression. No external hemorrhage. Cool extremities with delayed capillary refill.",
        labs: [
          {
            name: "Hemoglobin",
            value: "9.4",
            unit: "g/dL",
            flag: "low"
          },
          {
            name: "Lactate",
            value: "4.6",
            unit: "mmol/L",
            flag: "high"
          },
          {
            name: "INR",
            value: "1.2",
            unit: "",
            flag: "normal"
          },
          {
            name: "AST/ALT",
            value: "142 / 118",
            unit: "U/L",
            flag: "high"
          },
          {
            name: "Creatinine",
            value: "1.1",
            unit: "mg/dL",
            flag: "normal"
          },
          {
            name: "Type and screen",
            value: "sent, uncrossmatched blood requested",
            unit: "",
            flag: "normal"
          }
        ],
        findings: {
          cardiac: {
            pslax: {
              normal: true,
              gif: "assets/gifs/common/pslax-normal.gif",
              label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Normal LV size and function."
            },
            psax: {
              normal: true,
              gif: "assets/gifs/common/psax-normal.gif",
              label: "Normal RV and LV size",
              interpretation: "No abnormality."
            },
            apical4: {
              normal: true,
              gif: "assets/gifs/common/apical4-normal.gif",
              label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality."
            },
            subcostal4: {
              normal: true,
              gif: "assets/gifs/common/subcostal4-normal.gif",
              label: "No pericardial effusion",
              interpretation: "Normal subcostal window. No pericardial fluid, which excludes tamponade as a cause of shock in the trauma patient."
            }
          },
          lung: {
            anteriorRight: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-1.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the right."
            },
            anteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-2.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the left."
            },
            posteriorRight: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-2.gif",
              label: "No hemothorax",
              interpretation: "No right pleural fluid; spine sign absent above the diaphragm."
            },
            posteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-1.gif",
              label: "No hemothorax",
              interpretation: "No left pleural fluid; spine sign absent above the diaphragm."
            }
          },
          abdomen: {
            ruq: {
              normal: false,
              gif: "assets/gifs/ap2-efast-morisons/ruq-free-fluid.gif",
              label: "Free fluid in Morison's pouch (hepatorenal space)",
              interpretation: "An anechoic stripe separates the liver edge from the right kidney in the hepatorenal space (Morison's pouch), extending along the inferior liver tip. In an unstable blunt trauma patient this is hemoperitoneum until proven otherwise. The most likely sources are liver laceration, right kidney injury, or mesenteric injury."
            },
            luq: {
              normal: true,
              gif: "assets/gifs/common/luq-normal.gif",
              label: "No splenorenal free fluid",
              interpretation: "Normal spleen with no fluid in the splenorenal recess or subphrenic space."
            },
            suprapubic: {
              normal: true,
              gif: "assets/gifs/common/suprapubic-normal.gif",
              label: "No pelvic free fluid",
              interpretation: "No free fluid behind the bladder at this time. Free fluid may accumulate in the pelvis later, so serial exams are important."
            },
            ivc: {
              normal: false,
              gif: "assets/gifs/ap2-efast-morisons/ivc-hyperdynamic.gif",
              label: "Hyperdynamic IVC",
              interpretation: "The IVC is small (under 1 cm) and hyperdynamic, with near-complete inspiratory collapse, consistent with hypovolemia from hemorrhage. The IVC is a trend and not a stand-alone test, but here it supports the clinical picture of hemorrhagic shock."
            }
          }
        }
      },
      {
        id: "ap3",
        title: "Bicycle Handlebar Injury",
        teaser: "16M, left upper quadrant and shoulder pain after falling over his bicycle handlebars.",
        hpi: "A 16-year-old boy is brought in by his parents after being thrown over the handlebars of his bicycle and striking his left flank on a curb. He was not wearing a helmet but did not lose consciousness. He now reports left upper abdominal pain that radiates to the left shoulder and mild lightheadedness when standing. He has no medical problems, takes no medications and is up to date on immunizations.",
        vitals: {
          hr: "118",
          bp: "104/60",
          rr: "22",
          spo2: "99% RA",
          temp: "36.8°C"
        },
        exam: "Alert, pale, and uncomfortable. Ecchymosis over the left lower chest and flank. Tenderness over left ribs 9-11 and the left upper quadrant, with voluntary guarding but no rigidity. Left shoulder pain with supine positioning. Pelvis stable. Cap refill 3 seconds. Pulses are present but thready.",
        labs: [
          {
            name: "Hemoglobin",
            value: "10.8",
            unit: "g/dL",
            flag: "low"
          },
          {
            name: "WBC",
            value: "16.2",
            unit: "K/µL",
            flag: "high"
          },
          {
            name: "Lactate",
            value: "3.2",
            unit: "mmol/L",
            flag: "high"
          },
          {
            name: "AST/ALT",
            value: "52 / 40",
            unit: "U/L",
            flag: "high"
          },
          {
            name: "Urinalysis",
            value: "trace blood",
            unit: "",
            flag: "high"
          },
          {
            name: "Creatinine",
            value: "0.8",
            unit: "mg/dL",
            flag: "normal"
          }
        ],
        findings: {
          cardiac: {
            pslax: {
              normal: true,
              gif: "assets/gifs/common/pslax-normal.gif",
              label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Normal LV size and function."
            },
            psax: {
              normal: true,
              gif: "assets/gifs/common/psax-normal.gif",
              label: "Normal RV and LV size",
              interpretation: "No abnormality."
            },
            apical4: {
              normal: true,
              gif: "assets/gifs/common/apical4-normal.gif",
              label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality."
            },
            subcostal4: {
              normal: true,
              gif: "assets/gifs/common/subcostal4-normal.gif",
              label: "No pericardial effusion",
              interpretation: "Normal subcostal window. No pericardial fluid, which excludes tamponade as a cause of shock in the trauma patient."
            }
          },
          lung: {
            anteriorRight: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-1.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the right."
            },
            anteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-2.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the left."
            },
            posteriorRight: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-2.gif",
              label: "No hemothorax",
              interpretation: "No right pleural fluid; spine sign absent above the diaphragm."
            },
            posteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-1.gif",
              label: "No hemothorax",
              interpretation: "No left pleural fluid; spine sign absent above the diaphragm."
            }
          },
          abdomen: {
            ruq: {
              normal: true,
              gif: "assets/gifs/common/ruq-normal.gif",
              label: "No hepatorenal free fluid",
              interpretation: "Morison's pouch is clear. Normal liver and right kidney."
            },
            luq: {
              normal: false,
              gif: "assets/gifs/ap3-efast-splenorenal/luq-free-fluid.gif",
              label: "Free fluid in the splenorenal space",
              interpretation: "Anechoic fluid is seen between the spleen and the left kidney and tracks up around the spleen into the subphrenic space. The splenic tip may appear irregular or heterogeneous in a splenic laceration. The left upper quadrant is the most dependent site for fluid when the patient is supine and the left side is the most common area to see fluid in a splenic injury. A hemodynamically borderline child with a positive FAST needs urgent surgical consultation, with CT only if he stabilizes after resuscitation."
            },
            suprapubic: {
              normal: true,
              gif: "assets/gifs/common/suprapubic-normal.gif",
              label: "No pelvic free fluid",
              interpretation: "Normal bladder. No free fluid in the pelvis."
            },
            ivc: {
              normal: true,
              gif: "assets/gifs/common/ivc-normal-1.gif",
              label: "Normal caliber and collapse",
              interpretation: "The IVC is normal size with respiratory variation. Young, previously healthy patients can compensate for significant blood loss before blood pressure drops, so a normal IVC does not exclude hemorrhage."
            }
          }
        }
      },
      {
        id: "ap4",
        title: "Seat Belt Sign After a Highway Collision",
        teaser: "33M, restrained driver with lower abdominal pain and a seat belt sign; vitals stable.",
        hpi: "A 33-year-old man was the restrained driver in a rear-end collision at highway speed with airbag deployment. He was ambulatory at the scene. He reports diffuse lower abdominal pain that is worsening over the last hour. He has no vomiting, no hematuria and no chest pain. He has no medical history and drinks alcohol socially. His last meal was 3 hours ago.",
        vitals: {
          hr: "104",
          bp: "124/78",
          rr: "20",
          spo2: "98% RA",
          temp: "36.9°C"
        },
        exam: "Alert and oriented, in mild distress. Horizontal linear ecchymosis across the lower abdomen (seat belt sign). Diffuse lower abdominal tenderness with voluntary guarding, worst in the suprapubic region. Bowel sounds are decreased. Pelvis stable. No gross hematuria on rectal exam, normal tone, no blood.",
        labs: [
          {
            name: "Hemoglobin",
            value: "13.6",
            unit: "g/dL",
            flag: "normal"
          },
          {
            name: "WBC",
            value: "15.1",
            unit: "K/µL",
            flag: "high"
          },
          {
            name: "Lactate",
            value: "2.4",
            unit: "mmol/L",
            flag: "high"
          },
          {
            name: "Lipase",
            value: "38",
            unit: "U/L",
            flag: "normal"
          },
          {
            name: "Urinalysis",
            value: "no blood",
            unit: "",
            flag: "normal"
          },
          {
            name: "Creatinine",
            value: "0.9",
            unit: "mg/dL",
            flag: "normal"
          }
        ],
        findings: {
          cardiac: {
            pslax: {
              normal: true,
              gif: "assets/gifs/common/pslax-normal.gif",
              label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Normal LV size and function."
            },
            psax: {
              normal: true,
              gif: "assets/gifs/common/psax-normal.gif",
              label: "Normal RV and LV size",
              interpretation: "No abnormality."
            },
            apical4: {
              normal: true,
              gif: "assets/gifs/common/apical4-normal.gif",
              label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality."
            },
            subcostal4: {
              normal: true,
              gif: "assets/gifs/common/subcostal4-normal.gif",
              label: "No pericardial effusion",
              interpretation: "Normal subcostal window. No pericardial fluid, which excludes tamponade as a cause of shock in the trauma patient."
            }
          },
          lung: {
            anteriorRight: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-1.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the right."
            },
            anteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-2.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the left."
            },
            posteriorRight: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-2.gif",
              label: "No hemothorax",
              interpretation: "No right pleural fluid; spine sign absent above the diaphragm."
            },
            posteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-1.gif",
              label: "No hemothorax",
              interpretation: "No left pleural fluid; spine sign absent above the diaphragm."
            }
          },
          abdomen: {
            ruq: {
              normal: true,
              gif: "assets/gifs/common/ruq-normal.gif",
              label: "No hepatorenal free fluid",
              interpretation: "Morison's pouch is clear."
            },
            luq: {
              normal: true,
              gif: "assets/gifs/common/luq-normal.gif",
              label: "No splenorenal free fluid",
              interpretation: "Splenorenal recess is clear. Normal spleen."
            },
            suprapubic: {
              normal: false,
              gif: "assets/gifs/ap4-efast-pelvic/suprapubic-free-fluid.gif",
              label: "Free fluid behind the bladder (retrovesical space)",
              interpretation: "Anechoic fluid is seen posterior and superior to the bladder in the retrovesical pouch (rectovesical pouch in men), with bowel loops outlined by fluid. The pelvis is the most dependent part of the peritoneal cavity in the supine patient, so small volumes collect here first. Free fluid with a seat belt sign and no solid organ injury should raise concern for bowel or mesenteric injury. CT with IV contrast is appropriate if the patient remains stable, and the surgical team should be notified. Serial exams are recommended."
            },
            ivc: {
              normal: true,
              gif: "assets/gifs/common/ivc-normal-2.gif",
              label: "Normal caliber and collapse",
              interpretation: "Normal IVC. The patient is currently compensated."
            }
          }
        }
      },
      {
        id: "ap5",
        title: "Sudden Severe Flank Pain",
        teaser: "34M, abrupt right flank pain radiating to the groin with hematuria and vomiting.",
        hpi: "A 34-year-old man presents with 4 hours of severe, colicky right flank pain that began abruptly and radiates to his right groin and testicle. He cannot find a comfortable position. He has vomited twice and noticed pink urine. No fevers, dysuria or prior stones. He takes no medications. He has a family history of kidney stones.",
        vitals: {
          hr: "98",
          bp: "148/92",
          rr: "18",
          spo2: "99% RA",
          temp: "37.0°C"
        },
        exam: "Writhing and unable to lie still. Right costovertebral angle tenderness. Abdomen soft, nondistended, mildly tender in the right lower quadrant without guarding or rebound. Normal testicular exam. No rash.",
        labs: [
          {
            name: "Urinalysis",
            value: "large blood, no nitrite, no leukocyte esterase",
            unit: "",
            flag: "high"
          },
          {
            name: "WBC",
            value: "10.9",
            unit: "K/µL",
            flag: "normal"
          },
          {
            name: "Creatinine",
            value: "1.1",
            unit: "mg/dL",
            flag: "normal"
          },
          {
            name: "BUN",
            value: "16",
            unit: "mg/dL",
            flag: "normal"
          },
          {
            name: "Calcium",
            value: "9.4",
            unit: "mg/dL",
            flag: "normal"
          },
          {
            name: "Lactate",
            value: "1.1",
            unit: "mmol/L",
            flag: "normal"
          }
        ],
        findings: {
          cardiac: {
            pslax: {
              normal: true,
              gif: "assets/gifs/common/pslax-normal.gif",
              label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Normal LV size and function."
            },
            psax: {
              normal: true,
              gif: "assets/gifs/common/psax-normal.gif",
              label: "Normal RV and LV size",
              interpretation: "No abnormality."
            },
            apical4: {
              normal: true,
              gif: "assets/gifs/common/apical4-normal.gif",
              label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality."
            },
            subcostal4: {
              normal: true,
              gif: "assets/gifs/common/subcostal4-normal.gif",
              label: "Normal, used for IVC access",
              interpretation: "No abnormality. Also used to obtain the IVC; see the Abdomen tab."
            }
          },
          lung: {
            anteriorRight: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-1.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the right."
            },
            anteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-2.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the left."
            },
            posteriorRight: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-2.gif",
              label: "PLAPS point: no effusion",
              interpretation: "No pleural effusion."
            },
            posteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-1.gif",
              label: "PLAPS point: no effusion",
              interpretation: "No pleural effusion. A lower lobe process is not the cause of the flank pain."
            }
          },
          abdomen: {
            ruq: {
              normal: false,
              gif: "assets/gifs/ap5-renal-colic/ruq-hydronephrosis.gif",
              label: "Severe right hydronephrosis",
              interpretation: "The right renal collecting system is markedly dilated with anechoic fluid replacing the central echo complex, rounded calyces and a dilated renal pelvis (a \"bear paw\" or \"cluster of grapes\" appearance), and a thinned renal cortex. Severe hydronephrosis in a patient with typical colic strongly suggests an obstructing ureteral stone. Scan the full length of the kidney and look for perinephric fluid, which suggests forniceal rupture. Because the patient is afebrile with a normal creatinine, he can be managed with analgesia, antiemetics, and urology follow-up. If fever, infected urine, a solitary kidney or AKI were present, urgent decompression would be required."
            },
            luq: {
              normal: true,
              gif: "assets/gifs/ap5-renal-colic/luq-kidney-normal.gif",
              label: "Normal left kidney",
              interpretation: "No hydronephrosis of the left kidney. Normal spleen and no free fluid. The normal contralateral kidney is a useful comparison."
            },
            suprapubic: {
              normal: true,
              gif: "assets/gifs/ap5-renal-colic/suprapubic-bladder-jets.gif",
              label: "Normal bladder, no free fluid",
              interpretation: "Bladder is well distended with no stone or mass, and ureteral jets are visible. In an obstructing stone the jet from the affected side is often reduced or absent, so comparing the two sides can add supporting information. No free fluid."
            },
            ivc: {
              normal: true,
              gif: "assets/gifs/common/ivc-normal-1.gif",
              label: "Normal caliber and collapse",
              interpretation: "Normal IVC. The patient is euvolemic."
            }
          }
        }
      },
      {
        id: "ap6",
        title: "Right Upper Quadrant Pain with Jaundice",
        teaser: "62F, fever, RUQ pain and jaundice with elevated bilirubin.",
        hpi: "A 62-year-old woman presents with 2 days of worsening right upper quadrant pain, fevers with shaking chills, and yellow eyes. She has had intermittent postprandial RUQ pain for several months that she attributed to indigestion. She has had dark urine and pale stools for the past day. She has hypertension and takes lisinopril. No alcohol use.",
        vitals: {
          hr: "112",
          bp: "104/62",
          rr: "22",
          spo2: "97% RA",
          temp: "38.9°C"
        },
        exam: "Ill-appearing, with scleral icterus and jaundiced skin. Dry mucous membranes. Marked RUQ tenderness with voluntary guarding and a positive Murphy's sign. No peritoneal signs. Mentation is normal.",
        labs: [
          {
            name: "WBC",
            value: "17.6",
            unit: "K/µL",
            flag: "high"
          },
          {
            name: "AST/ALT",
            value: "142 / 168",
            unit: "U/L",
            flag: "high"
          },
          {
            name: "Alkaline phosphatase",
            value: "312",
            unit: "U/L",
            flag: "high"
          },
          {
            name: "Total bilirubin",
            value: "4.8",
            unit: "mg/dL",
            flag: "high"
          },
          {
            name: "Direct bilirubin",
            value: "3.6",
            unit: "mg/dL",
            flag: "high"
          },
          {
            name: "Lipase",
            value: "64",
            unit: "U/L",
            flag: "normal"
          },
          {
            name: "Lactate",
            value: "2.1",
            unit: "mmol/L",
            flag: "high"
          },
          {
            name: "Creatinine",
            value: "1.3",
            unit: "mg/dL",
            flag: "high"
          }
        ],
        findings: {
          cardiac: {
            pslax: {
              normal: true,
              gif: "assets/gifs/common/pslax-normal.gif",
              label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Normal LV size and function."
            },
            psax: {
              normal: true,
              gif: "assets/gifs/common/psax-normal.gif",
              label: "Normal RV and LV size",
              interpretation: "No abnormality."
            },
            apical4: {
              normal: true,
              gif: "assets/gifs/common/apical4-normal.gif",
              label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality."
            },
            subcostal4: {
              normal: true,
              gif: "assets/gifs/common/subcostal4-normal.gif",
              label: "Normal, used for IVC access",
              interpretation: "No pericardial effusion. Also used to obtain the IVC; see the Abdomen tab."
            }
          },
          lung: {
            anteriorRight: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-1.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the right."
            },
            anteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/anterior-lung-normal-2.gif",
              label: "Lung sliding present",
              interpretation: "Lung sliding with A-lines. No pneumothorax on the left."
            },
            posteriorRight: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-2.gif",
              label: "No hemothorax",
              interpretation: "No right pleural fluid; spine sign absent above the diaphragm."
            },
            posteriorLeft: {
              normal: true,
              gif: "assets/gifs/common/plaps-normal-1.gif",
              label: "No hemothorax",
              interpretation: "No left pleural fluid; spine sign absent above the diaphragm."
            }
          },
          abdomen: {
            ruq: {
              normal: false,
              gif: "assets/gifs/ap6-cbd-stone/ruq-choledocholithiasis.gif",
              label: "Gallstones with wall thickening and a dilated CBD containing a stone",
              interpretation: "The gallbladder contains multiple echogenic stones with posterior shadowing, a thickened wall (greater than 3 mm), pericholecystic fluid and a positive sonographic Murphy's sign, consistent with acute cholecystitis. Turning to the porta hepatis, the common bile duct is dilated, measuring about 10 mm (normal is under 6 mm, allowing roughly 1 mm per decade over age 60), and runs parallel to the portal vein, giving a \"double barrel shotgun\" or \"parallel channel\" sign. An echogenic focus with posterior shadowing in the distal CBD is an obstructing stone (choledocholithiasis). Together with fever, jaundice and RUQ pain (Charcot triad), this is acute cholangitis with concurrent cholecystitis. This patient needs IV fluids, blood cultures, broad-spectrum antibiotics, and urgent biliary decompression by ERCP. Ultrasound can miss distal CBD stones because bowel gas obscures the distal duct."
            },
            luq: {
              normal: true,
              gif: "assets/gifs/common/luq-normal.gif",
              label: "Normal spleen, no free fluid",
              interpretation: "No free fluid and no abnormality."
            },
            suprapubic: {
              normal: true,
              gif: "assets/gifs/common/suprapubic-normal.gif",
              label: "No free fluid",
              interpretation: "Normal bladder. No ascites."
            },
            ivc: {
              normal: true,
              gif: "assets/gifs/common/ivc-normal-2.gif",
              label: "Normal caliber and collapse",
              interpretation: "Normal IVC size with respiratory variation. Even so, she is septic and dehydrated, so fluid responsiveness should be judged with the clinical exam and serial reassessment."
            }
          }
        }
      }
    ],

    /* ======================================================================
       HYPOTENSION
       ====================================================================== */
    "hypotension": [
      {
        id: "hypo1",
        title: "Sudden Abdominal Pain and Near-Syncope",
        teaser: "29F, sudden severe lower abdominal pain and near-syncope, LMP 7 weeks ago.",
        hpi: "A 29-year-old woman presents after a syncopal episode at home, preceded by sudden severe lower abdominal pain and dizziness. Her last menstrual period was seven weeks ago; she is not on contraception. She feels persistently lightheaded and weak since arrival.",
        vitals: { hr: "128", bp: "82/54", rr: "26", spo2: "96% RA", temp: "36.5°C" },
        exam: "Pale, diaphoretic, and anxious-appearing. Diffuse tenderness across the lower abdomen with voluntary guarding and rebound. Cervical motion tenderness on pelvic exam. Extremities are cool with delayed capillary refill.",
        labs: [
          { name: "Hemoglobin", value: "8.9", unit: "g/dL", flag: "low" },
          { name: "Urine/serum hCG", value: "positive", unit: "", flag: "high" },
          { name: "Lactate", value: "3.8", unit: "mmol/L", flag: "high" },
          { name: "WBC", value: "11.2", unit: "K/µL", flag: "high" },
          { name: "Creatinine", value: "0.9", unit: "mg/dL", flag: "normal" },
          { name: "Type & screen", value: "O negative, pending crossmatch", unit: "", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "", label: "Hyperdynamic, underfilled LV — \"kissing walls\"",
              interpretation: "The left ventricular walls appear vigorous and nearly touch at end-systole (\"kissing walls\"), with a small end-diastolic cavity size. This hyperdynamic, underfilled pattern is characteristic of hypovolemia — here from hemorrhage." },
            psax: { normal: false, gif: "", label: "Small, hyperdynamic LV cavity",
              interpretation: "Near-complete cavity obliteration in systole with vigorous circumferential contraction, confirming a severely underfilled left ventricle." },
            apical4: { normal: false, gif: "", label: "Small chambers, vigorous contractility",
              interpretation: "Both ventricles appear small with a hyperdynamic, high-ejection-fraction contraction pattern and no pericardial effusion — this is the \"pump\" appearing empty rather than failing, distinguishing hemorrhagic from cardiogenic shock." },
            subcostal4: { normal: false, gif: "", label: "Confirms hyperdynamic, underfilled heart",
              interpretation: "Same small, vigorously contracting chambers seen subcostally. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no pneumothorax, no B-lines — the \"pipes\" of the chest are clear, and there is no evidence of a tension pneumothorax as a cause for this patient's hypotension." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no pneumothorax." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No hemothorax or effusion." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No hemothorax or effusion." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Free fluid in Morison's pouch",
              interpretation: "A wedge of anechoic free fluid is seen tracking within the hepatorenal recess (Morison's pouch), consistent with hemoperitoneum." },
            luq: { normal: false, gif: "", label: "Free fluid in the splenorenal recess",
              interpretation: "Anechoic free fluid is also seen in the splenorenal recess and around the inferior pole of the spleen, confirming a large-volume hemoperitoneum rather than a localized collection." },
            suprapubic: { normal: false, gif: "", label: "Free fluid in the pelvis / pouch of Douglas",
              interpretation: "A large amount of free fluid surrounds the bladder and fills the rectouterine pouch (pouch of Douglas), the most dependent space in a supine woman and often the first place free fluid accumulates. In this clinical context this is highly consistent with a ruptured ectopic pregnancy." },
            ivc: { normal: false, gif: "assets/gifs/hypo1-ectopic/ivc.gif", label: "Flat, fully collapsing IVC",
              interpretation: "The IVC is small in caliber (< 1.5 cm) and collapses more than 50% with a sniff, indicating a severely volume-depleted \"tank\" — consistent with ongoing hemorrhage and supporting a need for immediate blood product resuscitation." }
          }
        }
      },
      {
        id: "hypo2",
        title: "Acute Hypotension After Intubation for a Presumed Overdose",
        teaser: "24M intubated for opioid overdose, becomes acutely hypotensive and tachycardic en route.",
        hpi: "A 24-year-old man is found unresponsive by EMS with pinpoint pupils and shallow respirations. He is given two doses of intranasal naloxone with no improvement in respiratory drive and is intubated in the field for airway protection. En route to the hospital, he becomes acutely hypotensive and tachycardic.",
        vitals: { hr: "132", bp: "76/40", rr: "18 (ventilated, set rate)", spo2: "84% on FiO₂ 100%", temp: "36.4°C" },
        exam: "Jugular venous distension, tracheal deviation to the right, absent breath sounds over the left hemithorax, hyperresonance to percussion on the left side, distended neck veins, and a tachycardic rhythm with weak, thready pulses.",
        labs: [
          { name: "Lactate", value: "4.6", unit: "mmol/L", flag: "high" },
          { name: "ABG (post-intubation)", value: "pH 7.21, pCO₂ 58, pO₂ 54", unit: "", flag: "low" },
          { name: "Hemoglobin", value: "14.1", unit: "g/dL", flag: "normal" },
          { name: "Troponin", value: "<0.01", unit: "ng/mL", flag: "normal" },
          { name: "Creatinine", value: "1.0", unit: "mg/dL", flag: "normal" },
          { name: "Urine toxicology", value: "positive for opioids", unit: "", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/pslax.gif", label: "Small, underfilled, hyperdynamic LV",
              interpretation: "The left ventricle appears small and hyperdynamic, similar in appearance to hypovolemic shock. On its own this view can mislead you toward a \"tank\" problem — the key is that this small, empty-looking heart is paired with a plethoric IVC (see Abdomen tab), a dissociation that is the hallmark of obstructive rather than hypovolemic shock." },
            psax: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/psax.gif", label: "Small, vigorously contracting LV cavity",
              interpretation: "Near-complete cavity obliteration in systole, consistent with severely reduced venous return to the heart despite adequate intravascular volume — impaired filling is happening upstream, at the level of the great veins, because of elevated intrathoracic pressure." },
            apical4: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/apical4.gif", label: "Small chambers, vigorous contractility, no effusion",
              interpretation: "Both ventricles are small with hyperdynamic contraction and no pericardial effusion — this rules out tamponade as the obstructive cause and, combined with the lung findings, points to tension pneumothorax as the etiology of this patient's obstructive shock." },
            subcostal4: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/subcostal4.gif", label: "Confirms small, hyperdynamic heart",
              interpretation: "Same small, vigorously contracting chambers seen subcostally, no effusion. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/hypo2-tension-pneumothorax/anterior-right.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal lung sliding and A-line pattern on the unaffected right side." },
            anteriorLeft: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/anterior-left.gif", label: "Absent lung sliding — \"barcode sign\"",
              interpretation: "No lung sliding at the left anterior chest, with loss of the normal seashore sign on M-mode. Combined with tracheal deviation away from this side, absent breath sounds, and hyperresonance to percussion, this is a large, tension pneumothorax rather than a small asymptomatic one — this patient needs immediate needle or finger thoracostomy, not just observation." },
            posteriorRight: { normal: true, gif: "assets/gifs/hypo2-tension-pneumothorax/plaps-right.gif", label: "PLAPS point — no effusion",
              interpretation: "Normal on the unaffected side." },
            posteriorLeft: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/plaps-left.gif", label: "Absent lung sliding, no lung point found",
              interpretation: "Unlike a small, simple pneumothorax where sliding often persists at a dependent posterior point, sliding is absent here as well — no lung point can be found anywhere across the hemithorax. A large pneumothorax under tension, with no identifiable transition point, is a decompensating emergency and should prompt immediate needle or finger thoracostomy rather than further scanning to \"find the point.\"" }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver",
              interpretation: "No free fluid — helps exclude concomitant intra-abdominal hemorrhage as a contributor to this patient's shock." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/ivc.gif", label: "Plethoric, non-collapsing IVC — \"full tank, empty pump\"",
              interpretation: "The IVC is dilated and shows minimal respiratory collapse, despite the small, underfilled-appearing heart on cardiac views. This \"full tank but empty pump\" dissociation — a plethoric IVC with small hyperdynamic ventricles — is the signature RUSH exam pattern of obstructive shock, distinguishing it from the flat, collapsing IVC seen in hypovolemic shock (compare with the ruptured ectopic pregnancy case)." }
          }
        }
      }
    ],

    /* ======================================================================
       MIXED REVIEW
       ====================================================================== */
    "mixed-review": [
      {
        id: "mr1",
        title: "Epigastric Pain After Lunch",
        teaser: "61M with diabetes, two hours of epigastric pressure and nausea that began after a large meal.",
        hpi: "A 61-year-old man with type 2 diabetes, hypertension, and hyperlipidemia presents with two hours of constant epigastric pressure and nausea that began about 30 minutes after a large lunch. He vomited once. He attributes it to indigestion and took antacids without relief. He felt sweaty and mildly short of breath walking in from the parking lot. He was told years ago that he \"might have gallstones.\" No prior similar episodes.",
        vitals: { hr: "96", bp: "104/68", rr: "20", spo2: "95% RA", temp: "36.9°C" },
        exam: "Diaphoretic and uncomfortable. Mild epigastric tenderness without guarding. No right upper quadrant tenderness and a negative Murphy's sign. Regular rhythm with a soft S4, no murmur. Lungs clear. JVP not elevated. No peripheral edema.",
        labs: [
          { name: "Troponin I", value: "2.4", unit: "ng/mL", flag: "high" },
          { name: "Lipase", value: "38", unit: "U/L", flag: "normal" },
          { name: "AST/ALT", value: "52 / 30", unit: "U/L", flag: "high" },
          { name: "Total bilirubin", value: "0.6", unit: "mg/dL", flag: "normal" },
          { name: "WBC", value: "9.8", unit: "K/µL", flag: "normal" },
          { name: "Glucose", value: "248", unit: "mg/dL", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "bank/CARDIAC/PSLAX - LV dysfunction.gif", label: "Reduced LV systolic function",
              interpretation: "The LV myocardium does not thicken and move inward normally in systole, and overall contractility is visibly reduced. In a diaphoretic patient with epigastric pain and cardiac risk factors, new LV dysfunction should immediately reframe this as an acute coronary syndrome until proven otherwise." },
            psax: { normal: false, gif: "bank/CARDIAC/PSAX - LV dysfunction.gif", label: "Reduced wall thickening in short axis",
              interpretation: "The LV cavity fails to close down normally in systole. The short-axis view is the best bedside window for walking around the LV wall segment by segment: a regional abnormality (for example, an inferior wall that does not thicken while the anterior wall does) points toward ischemia rather than a diffuse cardiomyopathy." },
            apical4: { normal: false, gif: "bank/CARDIAC/Apical 4 - LV dysfunction.gif", label: "Reduced LV function, no pericardial effusion",
              interpretation: "Reduced LV systolic function is confirmed and there is no pericardial effusion. POCUS cannot diagnose an MI on its own, but a wall-motion abnormality plus an elevated troponin is enough to prioritize the ECG, aspirin, and a call to cardiology over further abdominal imaging." },
            subcostal4: { normal: false, gif: "bank/CARDIAC/Subcostal - LV dysfunction.gif", label: "Confirms reduced LV function",
              interpretation: "Same reduced contractility from the subcostal window. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "A-line pattern with no B-lines — no pulmonary edema yet despite the depressed LV." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "No B-lines." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation — no basilar pneumonia to explain upper abdominal pain." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "bank/ABD/Normal - gallbladder, contracted.gif", label: "Contracted postprandial gallbladder — not cholecystitis",
              interpretation: "The gallbladder is small and contracted, and its wall looks thick — but it has simply emptied after a meal, and a collapsed gallbladder normally appears thick-walled. There are no shadowing stones, no pericholecystic fluid, and probe pressure does not reproduce his pain (negative sonographic Murphy's sign). Calling \"wall thickening\" on a contracted gallbladder is a classic POCUS pitfall; if in doubt, re-scan after the patient has fasted. Here, the gallbladder is a distraction from the real diagnosis." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No abnormality." },
            ivc: { normal: true, gif: "bank/IVC/IVC - normal 2.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation — right-sided pressures are not elevated, consistent with the clear lungs. With a depressed LV, any fluid for his borderline blood pressure should be given in small, reassessed boluses." }
          }
        }
      },
      {
        id: "mr2",
        title: "Fast, Deep Breathing and Vomiting in a 12-Year-Old",
        teaser: "12F, two days of vomiting and abdominal pain, now breathing deeply and rapidly.",
        hpi: "A 12-year-old girl is brought in by her mother for two days of vomiting and diffuse abdominal pain. Over the past three weeks she has been drinking large amounts of water, getting up several times a night to urinate, and has lost about 8 pounds. Today she seems very tired and is \"breathing funny.\" No cough, fever, or sick contacts. No past medical history.",
        vitals: { hr: "132", bp: "98/58", rr: "34", spo2: "99% RA", temp: "37.0°C" },
        exam: "Drowsy but answering questions appropriately (GCS 14). Deep, rapid, regular respirations. Dry mucous membranes and a fruity odor to the breath. Capillary refill 3 seconds. Lungs clear with good air entry, no crackles or wheeze. Abdomen diffusely tender without rebound. Weight 38 kg.",
        labs: [
          { name: "Glucose", value: "512", unit: "mg/dL", flag: "high" },
          { name: "Venous pH", value: "7.08", unit: "", flag: "low" },
          { name: "Bicarbonate", value: "6", unit: "mEq/L", flag: "low" },
          { name: "Anion gap", value: "28", unit: "mEq/L", flag: "high" },
          { name: "β-hydroxybutyrate", value: "6.8", unit: "mmol/L", flag: "high" },
          { name: "Potassium", value: "5.4", unit: "mEq/L", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "bank/CARDIAC/PSLAX - hyperdynamic- hypovolemic.gif", label: "Hyperdynamic, underfilled LV",
              interpretation: "The LV is small with vigorous wall motion and near-obliteration of the cavity in systole. This is the heart of a volume-depleted patient — weeks of osmotic diuresis plus two days of vomiting have left her significantly dry." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No septal flattening or RV dilation." },
            apical4: { normal: false, gif: "bank/CARDIAC/Apical 4 - Hyperdynamic - hypovolemic.gif", label: "Small, vigorously contracting chambers",
              interpretation: "Both ventricles are small and hyperdynamic with no pericardial effusion and no sign of depressed function — the pump is empty, not failing." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "bank/LUNG/Anterior lung - normal 1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal aerated lung. Her rapid breathing is not coming from the lungs." },
            anteriorLeft: { normal: true, gif: "bank/LUNG/Anterior Lung - normal 2.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal, symmetric with the right." },
            posteriorRight: { normal: true, gif: "bank/LUNG/PLAPS - Normal with Mirror-artifact.gif", label: "PLAPS point — mirror artifact, no effusion",
              interpretation: "Above the diaphragm, the liver is \"mirrored\" into the chest — the mirror-image artifact. Its presence means there is air, not fluid, in the costophrenic recess: a normal finding that excludes an effusion at this point." },
            posteriorLeft: { normal: true, gif: "bank/LUNG/PLAPS- normal curtain.gif", label: "PLAPS point — normal curtain sign",
              interpretation: "Aerated lung slides down over the costophrenic angle with each breath, intermittently hiding the abdominal organs like a curtain. With all four lung zones normal, her tachypnea is not pulmonary — it is Kussmaul breathing, respiratory compensation for a severe metabolic acidosis." }
          },
          abdomen: {
            ruq: { normal: true, gif: "bank/ABD/RUQ-Normal.gif", label: "No free fluid, normal liver and kidney",
              interpretation: "Normal. Abdominal pain is common in DKA and usually resolves as the acidosis corrects; no surgical pathology is suggested here." },
            luq: { normal: true, gif: "bank/ABD/LUQ - normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "bank/ABD/Pelvic - Normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "bank/IVC/IVC - hypovolemic 1.gif", label: "Small, collapsing IVC",
              interpretation: "The IVC is small and collapses almost completely with respiration, consistent with significant volume depletion. In pediatric DKA, fluid resuscitation is essential but is given per your institution's DKA protocol — measured initial boluses followed by deficit replacement over 24–48 hours — with frequent neurologic checks, since cerebral edema is the leading cause of DKA-related death in children. Repeat the IVC and cardiac views to track her response." }
          }
        }
      },
      {
        id: "mr3",
        title: "Fever, Rigors, and Right Flank Pain",
        teaser: "66F, two days of fever and right flank pain, now hypotensive and confused.",
        hpi: "A 66-year-old woman with type 2 diabetes and a history of kidney stones presents with two days of right flank pain, fevers to 39.5°C, and shaking chills. Her daughter reports she has become progressively confused today and has barely urinated since this morning. She was seen at urgent care three days ago for dysuria and started on oral antibiotics.",
        vitals: { hr: "124", bp: "84/48", rr: "24", spo2: "95% RA", temp: "39.4°C" },
        exam: "Ill-appearing, flushed, oriented only to person. Warm extremities with bounding pulses. Marked right costovertebral angle tenderness. Abdomen soft with mild right-sided tenderness, no peritoneal signs. Lungs clear. No peripheral edema.",
        labs: [
          { name: "WBC", value: "21.6", unit: "K/µL", flag: "high" },
          { name: "Lactate", value: "4.8", unit: "mmol/L", flag: "high" },
          { name: "Creatinine", value: "2.3", unit: "mg/dL (baseline 0.9)", flag: "high" },
          { name: "Urinalysis", value: "large LE, nitrite +, >50 WBC/hpf", unit: "", flag: "high" },
          { name: "Procalcitonin", value: "18.2", unit: "ng/mL", flag: "high" },
          { name: "Glucose", value: "286", unit: "mg/dL", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal-sized LV with brisk contraction and no pericardial effusion. Early septic shock typically produces a vigorous, vasodilated picture rather than pump failure." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No septal flattening." },
            apical4: { normal: false, gif: "bank/CARDIAC/Apical 4 - Hyperdynamic - hypovolemic.gif", label: "Hyperdynamic, underfilled ventricles",
              interpretation: "Small, vigorously contracting ventricles with no effusion. Together with warm extremities and bounding pulses, this is distributive (septic) shock with relative hypovolemia — the pump is working hard and the tank is low." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "A-line pattern with no B-lines. A dry lung profile means she is likely to tolerate initial crystalloid boluses without developing pulmonary edema." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "No B-lines." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation — the lungs are not the source of her sepsis." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: false, gif: "bank/RENAL/Right Severe Hydronephrosis.gif", label: "Severe right hydronephrosis",
              interpretation: "The right renal collecting system is markedly dilated with ballooned calyces and a thinned surrounding cortex. In a febrile, hypotensive patient with a urinary source and a stone history, hydronephrosis means an obstructed, infected kidney — pus under pressure that antibiotics alone cannot clear. This is a urologic emergency requiring urgent decompression (ureteral stent or percutaneous nephrostomy)." },
            luq: { normal: true, gif: "bank/RENAL/LUQ+Kidney (normal).gif", label: "Normal left kidney, no free fluid",
              interpretation: "No hydronephrosis on the left. Unilateral hydronephrosis points to a ureteral obstruction (here, most likely a stone) rather than a bladder-outlet problem, which would dilate both kidneys." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "Decompressed bladder, no free fluid",
              interpretation: "Little urine in the bladder, consistent with her oliguria. No bladder distension, so outlet obstruction and retention are not the problem." },
            ivc: { normal: false, gif: "bank/IVC/IVC - hypovolemic 1.gif", label: "Small, collapsing IVC",
              interpretation: "A small, collapsible IVC reflects a low \"tank\" from vasodilation, fever, and poor oral intake. Give crystalloid boluses and start norepinephrine early if the MAP stays below 65 — but the definitive treatment is source control, so call urology or IR now rather than after resuscitation is \"complete.\"" }
          }
        }
      },
      {
        id: "mr4",
        title: "Fall from a Ladder with Chest Wall Crepitus",
        teaser: "70M on apixaban, left chest pain and worsening dyspnea after an 8-foot fall from a ladder.",
        hpi: "A 70-year-old man on apixaban for atrial fibrillation fell approximately 8 feet from a ladder while cleaning gutters, landing on his left side. He complains of severe left chest wall pain that worsens with breathing and progressive shortness of breath over the past hour. No head strike or loss of consciousness. He took his apixaban this morning.",
        vitals: { hr: "112 (irregular)", bp: "138/84", rr: "28", spo2: "89% RA", temp: "36.6°C" },
        exam: "Splinting with shallow respirations. Tenderness and palpable crepitus over the left lateral chest wall extending toward the neck. Decreased breath sounds on the left, although auscultation is limited by the crepitus. Trachea midline. No JVD. Abdomen soft and nontender. Pelvis stable.",
        labs: [
          { name: "Hemoglobin", value: "13.1", unit: "g/dL", flag: "normal" },
          { name: "Lactate", value: "2.1", unit: "mmol/L", flag: "high" },
          { name: "Apixaban (anti-Xa) level", value: "145", unit: "ng/mL", flag: "high" },
          { name: "Creatinine", value: "1.0", unit: "mg/dL", flag: "normal" },
          { name: "ABG PaO₂", value: "58", unit: "mmHg", flag: "low" },
          { name: "Type & screen", value: "sent", unit: "", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion; normal LV size and function." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Circular LV cross-section, no septal flattening, normal RV size." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "No pericardial effusion, no chamber size abnormality." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial fluid — excludes cardiac injury with tamponade. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal sliding on the uninjured side. Use it as an internal comparison for what normal pleura looks like in this patient." },
            anteriorLeft: { normal: false, gif: "bank/LUNG/Anterior Lung - Subcutaneous Emphysema.gif", label: "Subcutaneous emphysema — pleura cannot be seen",
              interpretation: "Bright, irregular hyperechoic foci within the chest wall scatter the ultrasound beam before it ever reaches the pleural line. Air in the soft tissues makes the pleura uninterpretable: you cannot call sliding present or absent here. Subcutaneous emphysema after chest trauma should itself raise strong suspicion for an underlying pneumothorax. Try firm probe pressure to displace the air, or move to an area of the chest without crepitus." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No hemothorax on the right." },
            posteriorLeft: { normal: false, gif: "bank/LUNG/Anterior lung - lung point.gif", label: "Lung point found laterally",
              interpretation: "Moving laterally, away from the crepitus, the transition between sliding lung and non-sliding pleura is found — the lung point. A lung point is essentially 100% specific for pneumothorax, and a lateral location suggests a moderate-to-large one. He needs a chest tube. Given his anticoagulation, re-scan the dependent PLAPS points serially for a developing hemothorax." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid",
              interpretation: "Negative Morison's pouch — no hemoperitoneum from a liver injury." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No splenorenal free fluid",
              interpretation: "Lower left rib fractures can lacerate the spleen. No free fluid now, but repeat the exam if he becomes hypotensive, especially given his anticoagulation." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No pelvic free fluid",
              interpretation: "No pelvic free fluid." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC — no obstructive (tension) physiology at this time. He is hypoxic but hemodynamically stable, which buys time for a controlled tube thoracostomy." }
          }
        }
      },
      {
        id: "mr5",
        title: "Puffy Eyes and a Swollen Belly in a Preschooler",
        teaser: "4M, one week of facial swelling progressing to a distended abdomen and swollen legs.",
        hpi: "A 4-year-old boy is brought in by his father for a week of puffiness around his eyes, initially thought to be allergies, that has progressed to swelling of his legs, scrotum, and abdomen. He is urinating less and his urine looks foamy. Over the last day he has been more tired, has vomited twice, and seems to be breathing faster. He had a cold two weeks ago. No other past medical history.",
        vitals: { hr: "138", bp: "92/54", rr: "34", spo2: "94% RA", temp: "36.9°C" },
        exam: "Tired-appearing but consolable. Marked periorbital edema, scrotal edema, and pitting edema to the knees. Abdomen distended with a fluid wave. Decreased breath sounds at the right base. Cool hands and feet with capillary refill of 3–4 seconds. No hepatomegaly or jugular venous distension.",
        labs: [
          { name: "Albumin", value: "1.4", unit: "g/dL", flag: "low" },
          { name: "Urine protein/creatinine", value: "9.6", unit: "mg/mg", flag: "high" },
          { name: "Total cholesterol", value: "412", unit: "mg/dL", flag: "high" },
          { name: "Creatinine", value: "0.5", unit: "mg/dL (baseline 0.3)", flag: "high" },
          { name: "Hemoglobin", value: "15.8", unit: "g/dL", flag: "high" },
          { name: "Sodium", value: "131", unit: "mEq/L", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal structure and function — the edema is not cardiac in origin." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Circular LV cross-section, no septal flattening, normal RV size." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view, no pericardial effusion",
              interpretation: "Normal chambers and function with no pericardial effusion, which can accompany severe hypoalbuminemia." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "No B-lines anteriorly — the lungs are not edematous from intravascular volume overload." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "Symmetric normal exam." },
            posteriorRight: { normal: false, gif: "bank/LUNG/PLAPS - Pleural effusion2.gif", label: "PLAPS point — pleural effusion",
              interpretation: "An anechoic effusion sits above the diaphragm, explaining his decreased right basilar breath sounds and mild hypoxia. In nephrotic syndrome this is a transudate from low plasma oncotic pressure." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No left effusion." }
          },
          abdomen: {
            ruq: { normal: false, gif: "bank/ABD/RUQ - ascities-pleural effusion.gif", label: "Ascites and a right pleural effusion",
              interpretation: "Free fluid surrounds the liver, and fluid is also seen above the diaphragm — the same effusion picked up at the PLAPS point. This is third-spaced fluid from severe hypoalbuminemia." },
            luq: { normal: false, gif: "bank/ABD/LUQ - Ascities.gif", label: "Ascites around the spleen",
              interpretation: "Free fluid also surrounds the spleen, confirming generalized ascites rather than a localized collection." },
            suprapubic: { normal: false, gif: "bank/ABD/Suprapubic - ascites.gif", label: "Ascites in the pelvis",
              interpretation: "Free fluid layers in the pelvis around the bladder." },
            ivc: { normal: false, gif: "bank/IVC/IVC - hypovolemic 1.gif", label: "Small, collapsing IVC — intravascularly dry",
              interpretation: "Despite anasarca, the IVC is small and collapses almost completely. This is the key teaching point of the case: he has too much total-body water but too little inside his blood vessels. With tachycardia, cool extremities, hemoconcentration, and a rising creatinine, he is at risk for hypovolemic shock, AKI, and thrombosis. Diuretics alone could make him worse; discuss albumin infusion (often followed by furosemide) with nephrology, and treat the underlying nephrotic syndrome." }
          }
        }
      },
      {
        id: "mr6",
        title: "Breathlessness Three Weeks After Delivery",
        teaser: "31F, three weeks postpartum, worsening dyspnea, orthopnea, and bilateral leg swelling.",
        hpi: "A 31-year-old woman who had an uncomplicated vaginal delivery of her second child three weeks ago presents with ten days of worsening shortness of breath. She now needs three pillows to sleep, wakes up gasping, and has new swelling in both legs. She attributed her fatigue to caring for a newborn. Her pregnancy was complicated by gestational hypertension. No prior cardiac history, chest pain, or fever. She is breastfeeding.",
        vitals: { hr: "118", bp: "108/76", rr: "28", spo2: "90% RA", temp: "36.8°C" },
        exam: "Dyspneic, speaking in short sentences. JVP elevated to 12 cm. Bibasilar crackles. An S3 gallop is present. 2+ bilateral pitting edema to the knees; calves symmetric and nontender.",
        labs: [
          { name: "BNP", value: "2,860", unit: "pg/mL", flag: "high" },
          { name: "Troponin", value: "0.06", unit: "ng/mL", flag: "high" },
          { name: "D-dimer", value: "1,100", unit: "ng/mL", flag: "high" },
          { name: "Hemoglobin", value: "11.2", unit: "g/dL", flag: "low" },
          { name: "Creatinine", value: "1.1", unit: "mg/dL", flag: "high" },
          { name: "Sodium", value: "134", unit: "mEq/L", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "bank/CARDIAC/PSLAX - LV dysfunction.gif", label: "Dilated, poorly contracting LV",
              interpretation: "The LV is dilated with globally reduced wall motion and poor anterior mitral leaflet excursion toward the septum. New systolic dysfunction toward the end of pregnancy or in the months after delivery, with no other identifiable cause, defines peripartum cardiomyopathy." },
            psax: { normal: false, gif: "bank/CARDIAC/PSAX - LV dysfunction.gif", label: "Globally reduced fractional shortening",
              interpretation: "The LV cavity barely changes size between diastole and systole. The septum is not flattened (no D sign), which argues against PE as the cause of her dyspnea — an important point, since the D-dimer is elevated (as it often is postpartum)." },
            apical4: { normal: false, gif: "bank/CARDIAC/Apical 4 - LV dysfunction.gif", label: "Severely reduced LV function",
              interpretation: "Visually estimated EF is severely reduced. In peripartum cardiomyopathy, a very low EF raises concern for LV thrombus — formal echocardiography is needed to look for it, and anticoagulation is often considered." },
            subcostal4: { normal: false, gif: "bank/CARDIAC/Subcostal - LV dysfunction.gif", label: "Confirms reduced LV function",
              interpretation: "Same globally reduced function subcostally. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 1.gif", label: "Multiple B-lines",
              interpretation: "Multiple vertical B-lines erase the A-lines in the anterior zone, reflecting interstitial pulmonary edema." },
            anteriorLeft: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 2.gif", label: "Multiple B-lines",
              interpretation: "Bilateral, symmetric B-lines — the pattern of cardiogenic pulmonary edema rather than a focal pneumonia." },
            posteriorRight: { normal: false, gif: "bank/LUNG/PLAPS - B lines and effusion.gif", label: "PLAPS point — B-lines and pleural effusion",
              interpretation: "A pleural effusion with B-lines in the adjacent lung, consistent with elevated left-sided filling pressures." },
            posteriorLeft: { normal: false, gif: "bank/LUNG/PLAPS - pleural effusion - spine sign.gif", label: "PLAPS point — pleural effusion with spine sign",
              interpretation: "The thoracic spine can be followed above the diaphragm (the spine sign) because fluid, not air, now transmits the beam. Bilateral effusions complete the picture of decompensated heart failure." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid",
              interpretation: "No ascites or free fluid." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "bank/IVC/IVC - plethoric 1.gif", label: "Plethoric, non-collapsing IVC",
              interpretation: "A dilated IVC with minimal respiratory variation confirms elevated right atrial pressure. Treat with IV loop diuretics and involve cardiology urgently; the choice of guideline-directed medications is shaped by the fact that she is breastfeeding." }
          }
        }
      },
      {
        id: "mr7",
        title: "Fever and Pleuritic Pain in a Young Man Who Injects Drugs",
        teaser: "28M who injects drugs, one week of fevers, blood-streaked cough, and bilateral pleuritic pain.",
        hpi: "A 28-year-old man with active injection drug use presents with one week of fevers, rigors, a cough productive of blood-streaked sputum, and sharp bilateral chest pain with breathing. He last injected heroin yesterday and reports reusing needles. No prior hospitalizations.",
        vitals: { hr: "116", bp: "106/62", rr: "26", spo2: "91% RA", temp: "39.2°C" },
        exam: "Ill-appearing. Track marks in both antecubital fossae and a fluctuant, erythematous area on the right forearm. A soft holosystolic murmur at the left lower sternal border that increases with inspiration. Scattered crackles bilaterally and decreased breath sounds at the right base. Splinter hemorrhages on two fingernails.",
        labs: [
          { name: "WBC", value: "18.4", unit: "K/µL", flag: "high" },
          { name: "Blood cultures", value: "2/2 gram-positive cocci in clusters", unit: "", flag: "high" },
          { name: "Procalcitonin", value: "6.4", unit: "ng/mL", flag: "high" },
          { name: "Lactate", value: "2.6", unit: "mmol/L", flag: "high" },
          { name: "Hepatitis C antibody", value: "positive", unit: "", flag: "high" },
          { name: "Creatinine", value: "1.0", unit: "mg/dL", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV, no pericardial effusion",
              interpretation: "Normal LV size and function, no pericardial effusion." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No RV dilation or septal flattening." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "No obvious vegetation, normal function",
              interpretation: "No large vegetation is visible and the right heart is normal in size. This is a key limitation: POCUS has poor sensitivity for vegetations, especially on the tricuspid valve. A normal-looking bedside echo does NOT exclude endocarditis — with a new murmur of tricuspid regurgitation and staphylococcal bacteremia, he needs formal echocardiography, likely including TEE." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "bank/LUNG/Anterior lung - cavitary lesion.gif", label: "Subpleural cavitary lesion",
              interpretation: "A peripheral, subpleural lesion with an irregular border and bright internal air artifact — a cavity within consolidated lung. Multiple peripheral cavitating lesions in a person who injects drugs, with bacteremia and a tricuspid murmur, is the classic picture of septic pulmonary emboli from right-sided endocarditis." },
            anteriorLeft: { normal: false, gif: "bank/LUNG/Anterior lung - shred sign pneumonia.gif", label: "Subpleural consolidation — shred sign",
              interpretation: "A wedge of hypoechoic, tissue-like lung with an irregular, \"shredded\" deep border where it meets aerated lung. Here it represents another septic embolus with surrounding consolidation. The bilateral, peripheral distribution is a clue to a bloodstream rather than an aspiration source." },
            posteriorRight: { normal: false, gif: "bank/LUNG/PLAPS - pleural effusion - spine sign.gif", label: "PLAPS point — pleural effusion",
              interpretation: "A right pleural effusion with a positive spine sign. Effusions adjacent to septic emboli can become empyemas; if this enlarges or he fails to defervesce, a diagnostic thoracentesis is warranted, and ultrasound can guide it." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver and kidney",
              interpretation: "No abnormality." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "Normal spleen, no free fluid",
              interpretation: "No splenomegaly or perisplenic fluid." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-2.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC. He is febrile and tachycardic but not profoundly volume depleted; reassess if his blood pressure falls." }
          }
        }
      },
      {
        id: "mr8",
        title: "Sudden Pelvic Pain During Exercise",
        teaser: "21F, sudden severe lower abdominal pain and near-syncope, negative pregnancy test.",
        hpi: "A 21-year-old woman presents with sudden-onset, severe right lower abdominal pain that began during a workout about three hours ago. The pain has spread across her lower abdomen, and she nearly fainted when standing. Her last menstrual period began 24 days ago; her cycles are regular. She is sexually active and uses condoms. No fever, vomiting, vaginal bleeding, or urinary symptoms.",
        vitals: { hr: "122", bp: "92/56", rr: "22", spo2: "99% RA", temp: "36.8°C" },
        exam: "Pale and lying still. Lower abdominal tenderness, worse on the right, with guarding and rebound. She reports right shoulder discomfort when lying flat. Right adnexal tenderness on pelvic exam, no cervical motion tenderness or discharge.",
        labs: [
          { name: "Hemoglobin", value: "9.6", unit: "g/dL", flag: "low" },
          { name: "Urine/serum hCG", value: "negative", unit: "", flag: "normal" },
          { name: "Lactate", value: "3.1", unit: "mmol/L", flag: "high" },
          { name: "WBC", value: "10.8", unit: "K/µL", flag: "normal" },
          { name: "INR", value: "1.0", unit: "", flag: "normal" },
          { name: "Type & screen", value: "A positive, crossmatch requested", unit: "", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "bank/CARDIAC/PSLAX - hyperdynamic- hypovolemic.gif", label: "Hyperdynamic, underfilled LV",
              interpretation: "A small LV cavity with vigorous contraction — a hypovolemic heart." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No septal flattening." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion and no RV dilation. The pump is not the problem." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "No pericardial effusion",
              interpretation: "No pericardial effusion. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "No pneumothorax." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "No pneumothorax." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No pleural fluid." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No pleural fluid." }
          },
          abdomen: {
            ruq: { normal: false, gif: "bank/TRAUMA/RUQ - FAST Positive.gif", label: "Free fluid in Morison's pouch",
              interpretation: "Anechoic fluid separates the liver from the right kidney. Fluid from a pelvic source that has tracked up to Morison's pouch implies a large-volume hemoperitoneum — far beyond the small amount of physiologic pelvic fluid that can be normal in women of reproductive age. Her right shoulder pain (Kehr's sign) reflects blood irritating the diaphragm." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No splenorenal free fluid",
              interpretation: "No fluid in the left upper quadrant yet." },
            suprapubic: { normal: false, gif: "bank/TRAUMA/Pelvic - FAST Positive.gif", label: "Free fluid in the pelvis",
              interpretation: "Free fluid fills the space behind the bladder. With a negative hCG, sudden pain during exertion in the second half of her cycle, and right adnexal tenderness, the leading diagnosis is a ruptured hemorrhagic (corpus luteum) ovarian cyst. A negative pregnancy test excludes ectopic pregnancy — but not life-threatening intraperitoneal hemorrhage. Compare with the ruptured ectopic case in the Hypotension section." },
            ivc: { normal: false, gif: "bank/IVC/IVC - hypovolemic 1.gif", label: "Small, collapsing IVC",
              interpretation: "A flat, collapsing IVC in a hypotensive patient with hemoperitoneum supports hemorrhagic shock. Start blood product resuscitation and consult gynecology emergently; unstable patients go to the OR for laparoscopy." }
          }
        }
      },
      {
        id: "mr9",
        title: "Waking Up Gasping with a Blood Pressure Over 220",
        teaser: "74F, abrupt-onset dyspnea overnight with BP 224/118 after running out of her medications.",
        hpi: "A 74-year-old woman with long-standing hypertension and stage 3 chronic kidney disease woke at 3 AM unable to breathe and was brought in by EMS sitting bolt upright. She felt well yesterday evening. She ran out of her amlodipine and lisinopril a week ago. She denies chest pain, fever, or leg swelling, and her weight is unchanged on her home log. An echocardiogram six months ago showed a normal ejection fraction with left ventricular hypertrophy.",
        vitals: { hr: "112", bp: "224/118", rr: "34", spo2: "84% RA", temp: "36.9°C" },
        exam: "Diaphoretic, tripoding, speaking in one- to two-word phrases. Diffuse crackles throughout both lung fields with scattered expiratory wheezes. JVP difficult to assess. No S3. No peripheral edema.",
        labs: [
          { name: "BNP", value: "980", unit: "pg/mL", flag: "high" },
          { name: "Troponin", value: "0.05", unit: "ng/mL", flag: "high" },
          { name: "Creatinine", value: "1.7", unit: "mg/dL (baseline 1.5)", flag: "high" },
          { name: "Potassium", value: "4.6", unit: "mEq/L", flag: "normal" },
          { name: "Hemoglobin", value: "12.4", unit: "g/dL", flag: "normal" },
          { name: "VBG pCO₂", value: "52", unit: "mmHg", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "bank/CARDIAC/PSLAX - normal.gif", label: "Preserved LV systolic function",
              interpretation: "LV contractility is preserved. This is the key branch point: pulmonary edema with a normally contracting heart in the middle of a hypertensive crisis is sympathetic crashing acute pulmonary edema (SCAPE) — a problem of afterload and a stiff, hypertrophied ventricle rather than a failing pump. (Wall thickness and diastolic function are better assessed on formal echo.)" },
            psax: { normal: true, gif: "bank/CARDIAC/PSAX - normal.gif", label: "Normal RV and LV size and contraction",
              interpretation: "Circular LV, no obvious regional wall motion abnormality, no septal flattening." },
            apical4: { normal: true, gif: "bank/CARDIAC/Apical 4 - normal.gif", label: "Preserved EF, no pericardial effusion",
              interpretation: "No chamber dilation or effusion." },
            subcostal4: { normal: true, gif: "bank/CARDIAC/Subcostal - normal.gif", label: "Preserved function, used for IVC access",
              interpretation: "Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 3.gif", label: "Diffuse B-lines",
              interpretation: "Confluent B-lines throughout the anterior chest — alveolar-interstitial edema that has developed over hours." },
            anteriorLeft: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 1.gif", label: "Diffuse B-lines",
              interpretation: "Bilateral and symmetric, matching the right side." },
            posteriorRight: { normal: false, gif: "bank/LUNG/PLAPS - B lines and effusion.gif", label: "PLAPS point — B-lines with a small effusion",
              interpretation: "B-lines with a small effusion in the dependent lung." },
            posteriorLeft: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 2.gif", label: "PLAPS point — confluent B-lines",
              interpretation: "Dense B-lines without a significant effusion. Bilateral diffuse B-lines in a patient who was well hours ago confirm pulmonary edema at the bedside within minutes — faster than a chest X-ray." }
          },
          abdomen: {
            ruq: { normal: true, gif: "bank/ABD/RUQ-Normal.gif", label: "No free fluid",
              interpretation: "No ascites." },
            luq: { normal: true, gif: "bank/ABD/LUQ - normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "bank/IVC/IVC - normal 1.gif", label: "Not plethoric — normal caliber with respiratory variation",
              interpretation: "Notably, the IVC is not plethoric. In SCAPE, intense vasoconstriction shifts blood from the venous reservoir into the lungs against a stiff ventricle — she is not total-body volume overloaded. Treatment is high-dose nitroglycerin plus noninvasive positive-pressure ventilation to rapidly lower preload and afterload. Large diuretic doses are secondary and can cause hypotension and AKI once the crisis breaks. Contrast this with the volume-overloaded IVC in the Shortness of Breath heart-failure case." }
          }
        }
      },
      {
        id: "mr10",
        title: "Abdominal Pain in a Teenager with Sickle Cell Disease",
        teaser: "15M with HbSC disease, 12 hours of right upper abdominal pain and vomiting after dinner.",
        hpi: "A 15-year-old boy with hemoglobin SC disease presents with 12 hours of right upper abdominal pain that started after a fried-chicken dinner, with nausea and two episodes of vomiting. He says this does not feel like his usual pain crises, which affect his back and legs. He has had two similar but shorter episodes in the past month. No fever, cough, or chest pain. He takes hydroxyurea and folic acid.",
        vitals: { hr: "104", bp: "122/70", rr: "18", spo2: "97% RA", temp: "37.4°C" },
        exam: "Uncomfortable but nontoxic. Mild scleral icterus, which his mother says is his baseline. Right upper quadrant tenderness to deep palpation without inspiratory arrest (negative Murphy's sign). Spleen tip not palpable. Lungs clear with good air entry. No chest wall tenderness.",
        labs: [
          { name: "Hemoglobin", value: "10.2", unit: "g/dL (baseline 10.5)", flag: "low" },
          { name: "Reticulocytes", value: "6.8", unit: "%", flag: "high" },
          { name: "Total bilirubin", value: "2.6", unit: "mg/dL (indirect 2.2)", flag: "high" },
          { name: "AST/ALT", value: "44 / 38", unit: "U/L", flag: "high" },
          { name: "Lipase", value: "30", unit: "U/L", flag: "normal" },
          { name: "WBC", value: "11.4", unit: "K/µL", flag: "high" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal function and no pericardial effusion. Children with chronic hemolytic anemia can have a mildly dilated, vigorously contracting heart from high cardiac output." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "Circular LV cross-section, no septal flattening, normal RV size." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "No RV dilation — no evidence of pulmonary hypertension or acute RV strain." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "No B-lines or consolidation. In sickle cell disease, new chest symptoms or hypoxia should always raise concern for acute chest syndrome. A normal lung ultrasound is reassuring today, but acute chest syndrome often evolves during hospitalization and still warrants a chest X-ray if respiratory symptoms develop." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-2.gif", label: "Lung sliding present, A-lines",
              interpretation: "Normal." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no consolidation or effusion",
              interpretation: "The lower lobes, where acute chest syndrome most often begins, show no consolidation or effusion." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no consolidation or effusion",
              interpretation: "No consolidation or effusion." }
          },
          abdomen: {
            ruq: { normal: false, gif: "bank/ABD/cholelithiasis (short axis).gif", label: "Gallstones with posterior acoustic shadowing",
              interpretation: "Echogenic stones within the gallbladder cast clean posterior acoustic shadows. Chronic hemolysis produces pigment (bilirubin) gallstones, which are very common in adolescents with sickle cell disease. There is no pericholecystic fluid, probe pressure does not reproduce focal tenderness (negative sonographic Murphy's), and he is afebrile — favoring biliary colic over acute cholecystitis. Next steps: a formal RUQ ultrasound to measure wall thickness and the common bile duct, and surgical referral for cholecystectomy." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No splenic enlargement, no free fluid",
              interpretation: "No splenomegaly or perisplenic fluid. In HbSC disease the spleen often persists into adolescence, so acute splenic sequestration — sudden enlargement with a falling hemoglobin — remains possible and is worth a look in any child with sickle cell disease and abdominal pain." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-1.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation." }
          }
        }
      },
      {
        id: "mr11",
        title: "Fever, Myalgias, and Rapidly Worsening Hypoxia",
        teaser: "39M, five days of influenza-like illness, now hypoxic on high-flow oxygen.",
        hpi: "A 39-year-old man with obesity and no other medical history presents with five days of fever, myalgias, dry cough, and sore throat. Both of his children had the flu last week. Over the past 24 hours his breathing has worsened markedly. He was placed on high-flow nasal cannula in the emergency department and is being evaluated for ICU admission. No history of heart disease and no leg swelling.",
        vitals: { hr: "118", bp: "118/72", rr: "36", spo2: "88% on HFNC (FiO₂ 0.8)", temp: "39.0°C" },
        exam: "Ill-appearing with increased work of breathing and accessory muscle use. Coarse crackles at both bases and scattered elsewhere. JVP not elevated. No S3. No peripheral edema. Warm extremities.",
        labs: [
          { name: "Influenza A PCR", value: "positive", unit: "", flag: "high" },
          { name: "WBC", value: "3.9", unit: "K/µL", flag: "low" },
          { name: "BNP", value: "42", unit: "pg/mL", flag: "normal" },
          { name: "PaO₂/FiO₂", value: "92", unit: "", flag: "low" },
          { name: "Procalcitonin", value: "0.3", unit: "ng/mL", flag: "normal" },
          { name: "Lactate", value: "1.9", unit: "mmol/L", flag: "normal" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: true, gif: "assets/gifs/common/pslax-normal.gif", label: "Normal LV size and function",
              interpretation: "Normal LV size and contractility — his hypoxia is not from cardiogenic pulmonary edema." },
            psax: { normal: true, gif: "assets/gifs/common/psax-normal.gif", label: "Normal RV and LV size",
              interpretation: "No septal flattening. Severe hypoxemia and high ventilator pressures can strain the RV later in the course, so it is worth re-checking." },
            apical4: { normal: true, gif: "assets/gifs/common/apical4-normal.gif", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no pericardial effusion." },
            subcostal4: { normal: true, gif: "assets/gifs/common/subcostal4-normal.gif", label: "Normal, used for IVC access",
              interpretation: "Normal. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "bank/LUNG/Anterior lung - B lines 3.gif", label: "Multiple coalescent B-lines",
              interpretation: "Dense B-lines in the anterior zone. On their own, B-lines cannot distinguish cardiogenic from inflammatory edema — the pattern across all zones, and the heart, are what separate them." },
            anteriorLeft: { normal: true, gif: "bank/LUNG/Anterior lung - normal 3 - A lines.gif", label: "Spared area — lung sliding with A-lines",
              interpretation: "A completely normal anterior zone sitting next to severely abnormal lung. These \"spared areas\" are a hallmark of ARDS and inflammatory lung injury: cardiogenic edema is usually diffuse and homogeneous, while ARDS is patchy." },
            posteriorRight: { normal: false, gif: "bank/LUNG/PLAPS - hepatitization.gif", label: "PLAPS point — dependent consolidation (hepatization)",
              interpretation: "The dependent lung is airless and tissue-like, resembling liver. Dependent consolidation develops in ARDS as the weight of edematous lung collapses posterior segments. It may also reflect a superimposed bacterial pneumonia, a common complication of influenza (consider coverage for S. aureus)." },
            posteriorLeft: { normal: false, gif: "bank/LUNG/PLAPS - dynamic air bronch.gif", label: "PLAPS point — consolidation with dynamic air bronchograms",
              interpretation: "Bright, branching air bronchograms move with respiration inside consolidated lung, meaning air is still moving through these airways — favoring inflammatory or infectious consolidation over resorptive atelectasis. Bilateral consolidations plus patchy B-lines with spared areas, a normal heart, and a normal IVC point to ARDS from influenza pneumonia." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid, normal liver and kidney",
              interpretation: "No abnormality." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/common/ivc-normal-2.gif", label: "Normal caliber and collapse",
              interpretation: "A normal IVC, a normal heart, and a BNP of 42 together argue against volume overload as the cause of his B-lines. Empiric diuresis would not help; focus instead on lung-protective ventilation strategies, antivirals, and treating any bacterial superinfection." }
          }
        }
      },
      {
        id: "mr12",
        title: "Collapse in the Hallway After Knee Surgery",
        teaser: "67M, post-op day 4 from knee replacement, syncope followed by hypotension and hypoxia.",
        hpi: "A 67-year-old man on post-operative day 4 after an elective right total knee arthroplasty collapsed while walking to the bathroom with physical therapy. He was unresponsive for about 30 seconds, woke up confused, and then reported sudden shortness of breath and chest tightness. He has been on prophylactic enoxaparin, but two doses were held for wound oozing. A rapid response has been called.",
        vitals: { hr: "128", bp: "78/52", rr: "32", spo2: "82% on 4L NC", temp: "37.3°C" },
        exam: "Diaphoretic, anxious, and tachypneic. Jugular venous distension to the angle of the jaw. Tachycardic, regular rhythm with a loud P2. Lungs clear bilaterally. Right leg swollen around the surgical dressing, making calf comparison difficult. Cool, mottled knees.",
        labs: [
          { name: "Troponin", value: "0.62", unit: "ng/mL", flag: "high" },
          { name: "BNP", value: "640", unit: "pg/mL", flag: "high" },
          { name: "Lactate", value: "5.2", unit: "mmol/L", flag: "high" },
          { name: "Creatinine", value: "1.4", unit: "mg/dL", flag: "high" },
          { name: "Hemoglobin", value: "11.8", unit: "g/dL", flag: "low" },
          { name: "ABG PaO₂", value: "52", unit: "mmHg", flag: "low" }
        ],
        findings: {
          cardiac: {
            pslax: { normal: false, gif: "bank/CARDIAC/PSLAX - RV enlargement.gif", label: "Dilated right ventricle",
              interpretation: "The RV, which should be roughly the same size as the aortic root and left atrium in this view, is markedly enlarged and crowds a small LV. Acute RV dilation in a hypotensive, hypoxic post-operative patient is massive PE until proven otherwise." },
            psax: { normal: false, gif: "bank/CARDIAC/PSAX - D sign.gif", label: "Septal flattening — the D sign",
              interpretation: "The pressure-overloaded RV pushes the interventricular septum toward the LV, flattening the normally round LV into a \"D.\" The LV is underfilled because the failing RV cannot push blood across the lungs." },
            apical4: { normal: false, gif: "bank/CARDIAC/Apical 4 - McConnell's sign.gif", label: "McConnell's sign — RV free wall hypokinesis with apical sparing",
              interpretation: "The RV is larger than the LV, and the RV free wall moves poorly while the RV apex still contracts. McConnell's sign is highly specific for acute PE. No thrombus is seen in the right heart in this view — compare with the clot-in-transit case in the Chest Pain section." },
            subcostal4: { normal: false, gif: "", label: "Dilated RV, no pericardial effusion",
              interpretation: "The subcostal view shows the same dilated RV bowing the septum toward the LV, with no pericardial effusion — tamponade is excluded as the cause of his obstructive physiology. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-1.gif", label: "Lung sliding present, A-lines",
              interpretation: "Lung sliding with A-lines. A dry, A-line lung in a patient with severe hypoxia and shock steers away from pulmonary edema and pneumothorax — and, paired with RV strain, toward PE." },
            anteriorLeft: { normal: true, gif: "assets/gifs/common/anterior-lung-normal-3.gif", label: "Lung sliding present, A-lines",
              interpretation: "Sliding present — no pneumothorax." },
            posteriorRight: { normal: true, gif: "assets/gifs/common/plaps-normal-2.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." },
            posteriorLeft: { normal: true, gif: "assets/gifs/common/plaps-normal-1.gif", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "assets/gifs/common/ruq-normal.gif", label: "No free fluid",
              interpretation: "No abnormality." },
            luq: { normal: true, gif: "assets/gifs/common/luq-normal.gif", label: "No free fluid, normal spleen",
              interpretation: "No abnormality." },
            suprapubic: { normal: true, gif: "assets/gifs/common/suprapubic-normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "bank/IVC/IVC - plethoric 3.gif", label: "Plethoric, non-collapsing IVC",
              interpretation: "A distended IVC with no respiratory variation reflects the backed-up, failing right heart. In obstructive shock from PE, large fluid boluses can further distend the RV and worsen septal shift — give little or no fluid and start a vasopressor such as norepinephrine. Hypotension plus RV dysfunction makes this high-risk (massive) PE: reperfusion with systemic thrombolysis or catheter-directed or surgical therapy should be considered immediately, weighing bleeding risk four days after surgery (many centers activate a PE response team)." }
          }
        }
      }
    ]
  }
};

/* View metadata: display order, labels, and spatial grid position for each
   organ system. Edit "name" to relabel a view anywhere on the site. */
const VIEW_META = {
  cardiac: [
    { key: "pslax", name: "PSLAX", full: "Parasternal Long Axis" },
    { key: "psax", name: "PSAX", full: "Parasternal Short Axis" },
    { key: "apical4", name: "Apical 4-Chamber", full: "Apical 4-Chamber" },
    { key: "subcostal4", name: "Subcostal 4-Chamber", full: "Subcostal 4-Chamber" }
  ],
  lung: [
    { key: "anteriorRight", name: "Anterior Right", full: "Right Anterior Lung" },
    { key: "anteriorLeft", name: "Anterior Left", full: "Left Anterior Lung" },
    { key: "posteriorRight", name: "PLAPS — Right", full: "Right Posterolateral Alveolar & Pleural Syndrome Point" },
    { key: "posteriorLeft", name: "PLAPS — Left", full: "Left Posterolateral Alveolar & Pleural Syndrome Point" }
  ],
  abdomen: [
    { key: "ruq", name: "RUQ", full: "Right Upper Quadrant" },
    { key: "luq", name: "LUQ", full: "Left Upper Quadrant" },
    { key: "suprapubic", name: "Suprapubic", full: "Suprapubic / Pelvic View" },
    { key: "ivc", name: "IVC", full: "Inferior Vena Cava (subcostal)" }
  ]
};
