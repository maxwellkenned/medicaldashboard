import { Routes as RoutesStack, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Patients } from './pages/Patients'

export function Routes() {
  return (
    <RoutesStack>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pacientes" element={<Patients />} />
    </RoutesStack>
  )
}
