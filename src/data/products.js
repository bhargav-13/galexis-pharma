// Dosage forms, therapy segments and an indicative product range.
// Replace `range` with the confirmed Galexis product list when available.

export const dosageForms = [
  { key: 'Tablet', icon: 'pill', title: 'Tablets', desc: 'Plain, film-coated, enteric-coated and dispersible tablets.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=360&fit=crop&q=80' },
  { key: 'Capsule', icon: 'capsule', title: 'Capsules', desc: 'Hard gelatin capsules for powder and pellet formulations.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=360&fit=crop&q=80' },
  { key: 'Syrup', icon: 'bottle', title: 'Syrups & Suspensions', desc: 'Oral liquids — syrups, suspensions and solutions.', image: 'https://images.unsplash.com/photo-1635166304271-04931640a450?w=600&h=360&fit=crop&q=80' },
  { key: 'Dry Syrup', icon: 'powder', title: 'Dry Syrups & Powders', desc: 'Powders for oral suspension and sachets.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=360&fit=crop&q=80' },
  { key: 'Ointment', icon: 'tube', title: 'Ointments, Creams & Gels', desc: 'Topical preparations for skin and pain care.', image: 'https://images.unsplash.com/photo-1614162063681-1adc832305b1?w=600&h=360&fit=crop&q=80' },
  { key: 'Nutraceutical', icon: 'heart', title: 'Nutraceuticals', desc: 'Multivitamins, minerals and health supplements.', image: 'https://images.unsplash.com/photo-1664956618021-73c47736845e?w=600&h=360&fit=crop&q=80' },
]

export const segments = [
  'Analgesic & Anti-inflammatory',
  'Anti-Infectives',
  'Gastrointestinal',
  'Cardiovascular',
  'Anti-Diabetic',
  'Respiratory, Cough & Cold',
  'Anti-Allergic',
  'Central Nervous System',
  'Vitamins & Minerals',
  'Dermatology',
  'Gynaecology',
  'Orthopaedic',
]

export const range = [
  { name: 'Paracetamol Tablets IP 650 mg', form: 'Tablet', segment: 'Analgesic & Anti-inflammatory', desc: 'Analgesic and antipyretic for relief of fever and mild to moderate pain.' },
  { name: 'Aceclofenac & Paracetamol Tablets', form: 'Tablet', segment: 'Analgesic & Anti-inflammatory', desc: 'Combination for pain and inflammation in musculoskeletal conditions.' },
  { name: 'Diclofenac Diethylamine Gel', form: 'Ointment', segment: 'Analgesic & Anti-inflammatory', desc: 'Topical gel for local relief of muscle and joint pain.' },
  { name: 'Azithromycin Tablets IP 500 mg', form: 'Tablet', segment: 'Anti-Infectives', desc: 'Macrolide antibiotic for respiratory and soft-tissue infections.' },
  { name: 'Amoxicillin & Potassium Clavulanate Tablets', form: 'Tablet', segment: 'Anti-Infectives', desc: 'Broad-spectrum antibiotic combination for bacterial infections.' },
  { name: 'Cefixime Dry Syrup', form: 'Dry Syrup', segment: 'Anti-Infectives', desc: 'Oral cephalosporin suspension for paediatric bacterial infections.' },
  { name: 'Pantoprazole Gastro-resistant Tablets 40 mg', form: 'Tablet', segment: 'Gastrointestinal', desc: 'Proton pump inhibitor for acidity, GERD and peptic ulcers.' },
  { name: 'Rabeprazole & Domperidone Capsules', form: 'Capsule', segment: 'Gastrointestinal', desc: 'Combination for acid reflux with nausea and bloating.' },
  { name: 'Antacid Oral Suspension', form: 'Syrup', segment: 'Gastrointestinal', desc: 'Fast relief from heartburn, acidity and gas.' },
  { name: 'Telmisartan Tablets IP 40 mg', form: 'Tablet', segment: 'Cardiovascular', desc: 'Angiotensin receptor blocker for management of hypertension.' },
  { name: 'Atorvastatin Tablets IP 10 mg', form: 'Tablet', segment: 'Cardiovascular', desc: 'Statin for management of high cholesterol.' },
  { name: 'Metformin Hydrochloride SR Tablets', form: 'Tablet', segment: 'Anti-Diabetic', desc: 'Sustained-release biguanide for type 2 diabetes.' },
  { name: 'Glimepiride & Metformin Tablets', form: 'Tablet', segment: 'Anti-Diabetic', desc: 'Combination therapy for glycaemic control in type 2 diabetes.' },
  { name: 'Cough Syrup (Dextromethorphan combination)', form: 'Syrup', segment: 'Respiratory, Cough & Cold', desc: 'For symptomatic relief of dry cough.' },
  { name: 'Montelukast & Levocetirizine Tablets', form: 'Tablet', segment: 'Anti-Allergic', desc: 'For allergic rhinitis and seasonal allergy symptoms.' },
  { name: 'Cetirizine Syrup', form: 'Syrup', segment: 'Anti-Allergic', desc: 'Antihistamine for sneezing, runny nose and itching.' },
  { name: 'Pregabalin & Methylcobalamin Capsules', form: 'Capsule', segment: 'Central Nervous System', desc: 'For neuropathic pain and nerve health.' },
  { name: 'Multivitamin & Multimineral Capsules', form: 'Capsule', segment: 'Vitamins & Minerals', desc: 'Daily supplement for general health and wellbeing.' },
  { name: 'Calcium & Vitamin D3 Tablets', form: 'Tablet', segment: 'Vitamins & Minerals', desc: 'Supports bone and joint health.' },
  { name: 'Iron & Folic Acid Syrup', form: 'Syrup', segment: 'Vitamins & Minerals', desc: 'For iron-deficiency anaemia and nutritional support.' },
  { name: 'Clotrimazole Cream', form: 'Ointment', segment: 'Dermatology', desc: 'Antifungal cream for skin fungal infections.' },
  { name: 'Protein Powder with Vitamins', form: 'Nutraceutical', segment: 'Vitamins & Minerals', desc: 'Nutritional supplement powder for daily protein needs.' },
  { name: 'Tranexamic Acid & Mefenamic Acid Tablets', form: 'Tablet', segment: 'Gynaecology', desc: 'For heavy menstrual bleeding and associated pain.' },
  { name: 'Calcium, Magnesium, Zinc & D3 Suspension', form: 'Syrup', segment: 'Orthopaedic', desc: 'Mineral supplement supporting bone strength.' },
]
