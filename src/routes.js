import Dashboard from './components/dashboard/Dashboard.vue'
import Treinamento from './components/treinamento/Treinamento.vue'
import Home from './components/home/Home.vue'

export const routes = [
  {
    path: '', 
    component: Home, 
    name: 'meu-mooc',
    titulo: 'meu-mooc' 
  }, 
  {
    path: '/dashboard', 
    component: Dashboard, 
    name: 'dashboard',
    titulo: 'meu-mooc dashboard' 
  }, 
  { 
    path: '/treinamento/:id', 
    component: Treinamento,
    name: 'treinamento' ,
    titulo: 'Treinamento meu-mooc' 
  }
];