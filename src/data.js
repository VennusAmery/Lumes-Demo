// Todos los datos son ficticios. Demo de portafolio, no es asesoría legal.
export const gaceta = [
  { id: 'G-1', fecha: '2026-10-28', tipo: 'Decreto', titulo: 'Decreto de ejemplo 14-2026: reforma a normas de teletrabajo', estado: 'En vigencia', tema: 'Laboral' },
  { id: 'G-2', fecha: '2026-10-21', tipo: 'Acuerdo', titulo: 'Acuerdo gubernativo de ejemplo 220-2026: registro electrónico de contratos', estado: 'En vigencia', tema: 'Laboral' },
  { id: 'G-3', fecha: '2026-10-15', tipo: 'Iniciativa', titulo: 'Iniciativa de ejemplo 6401: protección de datos personales', estado: 'En comisión', tema: 'Datos' },
  { id: 'G-4', fecha: '2026-10-02', tipo: 'Decreto', titulo: 'Decreto de ejemplo 11-2026: servicios digitales del Estado', estado: 'Aprobado', tema: 'Gobierno digital' },
]

export const contrato = [
  { n: 'Cláusula 3', texto: 'El trabajador prestará servicios en horario flexible sin límite de horas semanales.', riesgo: 'Alto', nota: 'No define jornada máxima. Conviene fijar jornada ordinaria y pago de horas extra.' },
  { n: 'Cláusula 5', texto: 'El patrono podrá terminar la relación en cualquier momento sin pago alguno.', riesgo: 'Alto', nota: 'Puede contradecir las normas sobre despido injustificado e indemnización.' },
  { n: 'Cláusula 7', texto: 'El salario se pagará mensualmente mediante depósito bancario.', riesgo: 'Bajo', nota: 'Forma de pago clara. Falta indicar fecha exacta de pago.' },
  { n: 'Cláusula 9', texto: 'Las partes se someten a los tribunales competentes de la ciudad de Guatemala.', riesgo: 'Bajo', nota: 'Jurisdicción definida.' },
]

export const jurisprudencia = [
  { exp: 'Expediente 0000-2024 (ficticio)', corte: 'Corte de Constitucionalidad', tema: 'Derechos fundamentales', resumen: 'Resumen de ejemplo sobre el alcance del derecho al trabajo y la libertad de contratación.' },
  { exp: 'Expediente 0000-2023 (ficticio)', corte: 'Corte Suprema de Justicia', tema: 'Despido', resumen: 'Resumen de ejemplo sobre carga de la prueba en un despido injustificado.' },
  { exp: 'Expediente 0000-2022 (ficticio)', corte: 'Corte de Constitucionalidad', tema: 'Jerarquía normativa', resumen: 'Resumen de ejemplo sobre prevalencia de la Constitución frente a una norma ordinaria.' },
]

export const preguntas = [
  { clave: ['vacacion'], r: 'Según el Código de Trabajo (art. 130), después de un año de servicios continuos el trabajador tiene derecho a 15 días hábiles de vacaciones remuneradas.' },
  { clave: ['jornada', 'horas'], r: 'La jornada ordinaria diurna es de 8 horas diarias y 44 semanales (Código de Trabajo, art. 116). Lo que exceda se paga como hora extra.' },
  { clave: ['despido', 'indemniz'], r: 'En un despido injustificado el patrono debe indemnizar al trabajador (Código de Trabajo, art. 82). Revisa el caso concreto con un abogado.' },
  { clave: ['aguinaldo', 'bono 14', 'bono'], r: 'El aguinaldo (Decreto 76-78) y el Bono 14 (Decreto 42-92) son prestaciones laborales obligatorias en el sector privado.' },
]
export const sugeridas = ['¿Cuántos días de vacaciones me corresponden?', '¿Cuál es la jornada ordinaria?', '¿Qué pasa si me despiden sin causa?', '¿Qué es el Bono 14?']
