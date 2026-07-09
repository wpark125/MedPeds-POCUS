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
      }
    ],

    /* ======================================================================
       SHORTNESS OF BREATH
       ====================================================================== */
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
