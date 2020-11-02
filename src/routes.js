import Dashboard from './components/dashboard/Dashboard.vue'
import Treinamento from './components/treinamento/Treinamento.vue'
import ListaDeTreinamentos from './components/listaDeTreinamentos/ListaDeTreinamentos.vue'
import Home from './components/home/Home.vue'

export const routes = [
  {
    path: '', 
    component: Home, 
    name: 'home',
    titulo: 'meu-mooc' 
  }, 
  {
    path: '/dashboard/:usuarioId', 
    component: Dashboard, 
    name: 'dashboard',
    titulo: 'meu-mooc dashboard' 
  }, 
  {
    path: '/treinamentos', 
    component: ListaDeTreinamentos, 
    name: 'listaDeTreinamentos',
    titulo: 'meu-mooc dashboard' 
  }, 
  { 
    path: '/treinamento/:id', 
    component: Treinamento,
    name: 'treinamento' ,
    titulo: 'Treinamento meu-mooc' 
  }
];