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
            pslax: { normal: true, gif: "", label: "Normal LV size and systolic function",
              interpretation: "Normal left ventricular cavity size and contractility. No pericardial effusion. RV size is difficult to judge reliably from this view — assess RV in PSAX and apical 4-chamber instead." },
            psax: { normal: false, gif: "", label: "RV dilation with septal flattening — \"D-sign\"",
              interpretation: "The interventricular septum is flattened and bows into the left ventricle during systole, producing a \"D-shaped\" LV cross-section instead of the normal circle. This reflects acute RV pressure overload from pulmonary embolism." },
            apical4: { normal: false, gif: "", label: "RV:LV ratio > 1, McConnell's sign",
              interpretation: "The right ventricle is dilated and larger than the left ventricle (RV:LV ratio > 1, normal is < 0.6). There is akinesis of the mid RV free wall with preserved contractility of the RV apex — McConnell's sign — a finding fairly specific for acute PE." },
            subcostal4: { normal: false, gif: "", label: "RV enlargement, confirms apical findings",
              interpretation: "Confirms RV dilation seen in the apical view. This window is also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal pleural sliding with horizontal A-lines and no B-lines. A clear anterior lung exam in a dyspneic, hypoxic patient is a classic and important negative — it argues against pulmonary edema and pneumonia and should raise suspicion for PE." },
            anteriorLeft: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Symmetrically clear to the right side — lung sliding present, A-line pattern, no B-lines." },
            posteriorRight: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No anechoic stripe above the diaphragm and no spine sign. No pleural effusion or consolidation at the posterolateral alveolar and pleural syndrome (PLAPS) point." },
            posteriorLeft: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "Left PLAPS point is likewise clear, no effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: true, gif: "", label: "No free fluid, normal liver",
              interpretation: "Morison's pouch is clear, no free fluid. Liver parenchyma appears normal." },
            luq: { normal: true, gif: "", label: "No free fluid, normal spleen",
              interpretation: "Splenorenal recess is clear, no free fluid." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "Bladder is normally distended, no free fluid in the pelvis." },
            ivc: { normal: false, gif: "", label: "Plethoric IVC, < 50% collapse",
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
            pslax: { normal: true, gif: "", label: "Normal LV size and function",
              interpretation: "Normal chamber size and contractility, no pericardial effusion. Included to confirm there is no tamponade physiology as an alternative explanation for this patient's symptoms." },
            psax: { normal: true, gif: "", label: "Normal RV and LV size",
              interpretation: "Normal circular LV cross-section, no septal flattening, no RV strain — argues against a large PE as the cause of his dyspnea." },
            apical4: { normal: true, gif: "", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes and systolic function, no effusion." },
            subcostal4: { normal: true, gif: "", label: "Normal, used for IVC access",
              interpretation: "Normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal lung sliding with a horizontal A-line pattern on the unaffected right side. On M-mode this produces the normal granular \"seashore sign.\"" },
            anteriorLeft: { normal: false, gif: "", label: "Absent lung sliding — \"barcode sign\"",
              interpretation: "No lung sliding is seen at the left anterior chest wall, and no B-lines are present. On M-mode, the normal seashore sign is replaced by horizontal lines above and below the pleural line — the \"barcode\" or \"stratosphere\" sign — because the visceral and parietal pleura are no longer in contact. In a supine patient, free pleural air rises to the least dependent point, which is why the anterior chest is the most sensitive location to scan for pneumothorax." },
            posteriorRight: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "Normal, no effusion or consolidation." },
            posteriorLeft: { normal: true, gif: "", label: "PLAPS point — lung sliding present",
              interpretation: "Lung sliding is actually still present at this dependent, posterolateral point, even though it was absent anteriorly — the lung remains opposed to the chest wall here because the free air has risen away from this more dependent zone. Sweeping the probe between an anterior point with no sliding and a lateral point with sliding restored lets you find the \"lung point\": the exact spot where sliding starts and stops. Identifying a lung point is close to 100% specific for pneumothorax and also gives a rough sense of its size — a lung point found far laterally suggests a small pneumothorax, while one found only very anteriorly (or never found at all) suggests a larger one." }
          },
          abdomen: {
            ruq: { normal: true, gif: "", label: "No free fluid, normal liver",
              interpretation: "No free fluid, included for completeness in this full scan." },
            luq: { normal: true, gif: "", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "", label: "Normal caliber and collapse",
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
            ruq: { normal: true, gif: "", label: "No free fluid, normal liver",
              interpretation: "No free fluid, normal liver architecture." },
            luq: { normal: true, gif: "", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: true, gif: "assets/gifs/cp3-pneumonia/ivc.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation, consistent with euvolemia and arguing against a volume-overloaded or obstructive process as the cause of this patient's hypoxia." }
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
            pslax: { normal: false, gif: "", label: "Dilated LV, reduced contractility",
              interpretation: "The left ventricle is dilated with visibly reduced wall excursion and a narrow separation between the mitral valve E-point and septum (increased EPSS), consistent with a reduced ejection fraction." },
            psax: { normal: false, gif: "", label: "Reduced fractional shortening",
              interpretation: "The LV cavity fails to fully close down in systole — reduced fractional area change confirms globally depressed systolic function." },
            apical4: { normal: false, gif: "", label: "Global hypokinesis, dilated LA",
              interpretation: "All four walls contract poorly (global hypokinesis) with a visually estimated EF in the 25–30% range. The left atrium is dilated, consistent with chronically elevated filling pressures." },
            subcostal4: { normal: false, gif: "", label: "Confirms reduced EF",
              interpretation: "Same globally reduced systolic function seen from the subcostal window, useful when apical windows are technically difficult. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: false, gif: "", label: "Diffuse B-lines — \"white lung\"",
              interpretation: "Three or more confluent B-lines per rib space across multiple anterior zones, coalescing into a \"white lung\" pattern. This reflects interstitial and alveolar edema." },
            anteriorLeft: { normal: false, gif: "", label: "Diffuse B-lines — \"white lung\"",
              interpretation: "Mirrors the right side — diffuse, bilateral, symmetric B-lines. Bilateral symmetric B-lines strongly favor a cardiogenic cause over a focal pneumonia." },
            posteriorRight: { normal: false, gif: "", label: "PLAPS point — pleural effusion",
              interpretation: "An anechoic space is seen above the diaphragm with a visible spine sign, consistent with a right pleural effusion and associated compressive atelectasis." },
            posteriorLeft: { normal: false, gif: "", label: "PLAPS point — pleural effusion",
              interpretation: "A smaller but present left pleural effusion, consistent with bilateral decompensated heart failure." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Dilated hepatic veins, hepatic congestion",
              interpretation: "The hepatic veins are dilated and plethoric where they drain into the IVC, a sign of passive hepatic congestion from elevated right-sided filling pressures. No free fluid." },
            luq: { normal: true, gif: "", label: "No free fluid, normal spleen",
              interpretation: "Spleen and splenorenal recess appear normal, no free fluid." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "", label: "Plethoric, non-collapsing IVC",
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
            ruq: { normal: false, gif: "", label: "Ascites and a nodular liver surface",
              interpretation: "A large amount of free fluid (ascites) surrounds the liver, and the liver surface itself appears nodular and irregular rather than smooth — a sonographic sign of cirrhotic architecture. This directly explains the patient's tense, distended abdomen." },
            luq: { normal: false, gif: "", label: "Ascites tracking around the spleen",
              interpretation: "Free fluid is also seen in the splenorenal recess, confirming this is large-volume ascites rather than an isolated perihepatic collection." },
            suprapubic: { normal: false, gif: "", label: "Ascites layering in the pelvis",
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
            luq: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/LUQ - Mass.gif", label: "No free fluid, normal spleen",
              interpretation: "Solid mass noted above diaphram with para-malignant effusion" },
            suprapubic: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/Pelvic - Normal.gif", label: "No free fluid",
              interpretation: "No free fluid in the pelvis — the fluid burden in this patient is confined to the left pleural space rather than reflecting a systemic third-spacing process." },
            ivc: { normal: true, gif: "assets/gifs/sob3-malignant-effusion/ivc.gif", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation, another point against a cardiac or volume-overload explanation for this patient's effusion and dyspnea." }
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
            pslax: { normal: true, gif: "", label: "Normal LV size and function",
              interpretation: "Normal chamber size and systolic function, no pericardial effusion." },
            psax: { normal: true, gif: "", label: "Normal RV and LV size",
              interpretation: "Circular LV cross-section, no septal flattening, normal RV size." },
            apical4: { normal: true, gif: "", label: "Normal four-chamber view",
              interpretation: "Normal chamber sizes, normal systolic function, no effusion. A normal cardiac exam here helps rule against a cardiorenal component." },
            subcostal4: { normal: true, gif: "", label: "Normal, used for IVC access",
              interpretation: "Confirms normal cardiac size and function. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal A-line pattern, no B-lines — argues against a volume-overloaded state." },
            anteriorLeft: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Symmetric normal exam to the left side." },
            posteriorRight: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." },
            posteriorLeft: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No effusion or consolidation." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Moderate right hydronephrosis",
              interpretation: "The right renal collecting system is dilated, with separation and rounding of the central renal pelvis and calyces — the \"bear claw\" appearance of moderate hydronephrosis. Cortex is preserved." },
            luq: { normal: false, gif: "", label: "Mild left hydronephrosis",
              interpretation: "Mild dilation of the left renal pelvis, less pronounced than the right side but confirming a bilateral, and therefore likely bladder-outlet or urethral, level of obstruction." },
            suprapubic: { normal: false, gif: "", label: "Markedly distended bladder",
              interpretation: "The bladder is markedly distended with an estimated volume well over 600 mL, consistent with bladder outlet obstruction from BPH. Post-void residual measurement and Foley catheter placement are indicated." },
            ivc: { normal: true, gif: "", label: "Normal caliber and collapse",
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
            pslax: { normal: true, gif: "", label: "Normal LV size and function",
              interpretation: "Normal cardiac exam, included here for completeness and to establish this as the patient's baseline." },
            psax: { normal: true, gif: "", label: "Normal RV and LV size",
              interpretation: "No abnormality." },
            apical4: { normal: true, gif: "", label: "Normal four-chamber view",
              interpretation: "No abnormality." },
            subcostal4: { normal: true, gif: "", label: "Normal, used for IVC access",
              interpretation: "No abnormality. Also used to obtain the IVC — see Abdomen tab." }
          },
          lung: {
            anteriorRight: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no evidence of a right basilar process mimicking RUQ pain." },
            anteriorLeft: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal." },
            posteriorRight: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No right pleural effusion — helps exclude a basilar pneumonia as the cause of this patient's pain." },
            posteriorLeft: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No abnormality." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Gallstones, wall thickening, sonographic Murphy's sign",
              interpretation: "A mobile, echogenic focus with posterior acoustic shadowing is seen within the gallbladder lumen, consistent with a gallstone. The gallbladder wall measures greater than 3 mm with a striated appearance, and a thin rim of pericholecystic fluid is present. Direct probe pressure over the gallbladder reproduces the patient's pain — a positive sonographic Murphy's sign. Together these findings are consistent with acute cholecystitis." },
            luq: { normal: true, gif: "", label: "Normal spleen, no free fluid",
              interpretation: "Normal splenic parenchyma, no free fluid in the splenorenal recess." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "No free fluid in the pelvis, normal bladder." },
            ivc: { normal: true, gif: "", label: "Normal caliber and collapse",
              interpretation: "Normal IVC size and respiratory variation." }
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
            anteriorRight: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no pneumothorax, no B-lines — the \"pipes\" of the chest are clear, and there is no evidence of a tension pneumothorax as a cause for this patient's hypotension." },
            anteriorLeft: { normal: true, gif: "", label: "Lung sliding present, A-lines",
              interpretation: "Normal, no pneumothorax." },
            posteriorRight: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No hemothorax or effusion." },
            posteriorLeft: { normal: true, gif: "", label: "PLAPS point — no effusion",
              interpretation: "No hemothorax or effusion." }
          },
          abdomen: {
            ruq: { normal: false, gif: "", label: "Free fluid in Morison's pouch",
              interpretation: "A wedge of anechoic free fluid is seen tracking within the hepatorenal recess (Morison's pouch), consistent with hemoperitoneum." },
            luq: { normal: false, gif: "", label: "Free fluid in the splenorenal recess",
              interpretation: "Anechoic free fluid is also seen in the splenorenal recess and around the inferior pole of the spleen, confirming a large-volume hemoperitoneum rather than a localized collection." },
            suprapubic: { normal: false, gif: "", label: "Free fluid in the pelvis / pouch of Douglas",
              interpretation: "A large amount of free fluid surrounds the bladder and fills the rectouterine pouch (pouch of Douglas), the most dependent space in a supine woman and often the first place free fluid accumulates. In this clinical context this is highly consistent with a ruptured ectopic pregnancy." },
            ivc: { normal: false, gif: "", label: "Flat, fully collapsing IVC",
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
            ruq: { normal: true, gif: "", label: "No free fluid, normal liver",
              interpretation: "No free fluid — helps exclude concomitant intra-abdominal hemorrhage as a contributor to this patient's shock." },
            luq: { normal: true, gif: "", label: "No free fluid, normal spleen",
              interpretation: "No free fluid." },
            suprapubic: { normal: true, gif: "", label: "No free fluid",
              interpretation: "No free fluid in the pelvis." },
            ivc: { normal: false, gif: "assets/gifs/hypo2-tension-pneumothorax/ivc.gif", label: "Plethoric, non-collapsing IVC — \"full tank, empty pump\"",
              interpretation: "The IVC is dilated and shows minimal respiratory collapse, despite the small, underfilled-appearing heart on cardiac views. This \"full tank but empty pump\" dissociation — a plethoric IVC with small hyperdynamic ventricles — is the signature RUSH exam pattern of obstructive shock, distinguishing it from the flat, collapsing IVC seen in hypovolemic shock (compare with the ruptured ectopic pregnancy case)." }
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
