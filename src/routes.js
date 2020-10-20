import Home from './components/home/Home.vue'
import Treinamento from './components/treinamento/Treinamento.vue'

export const routes = [
  {
    path: '', 
    component: Home, 
    name: 'home',
    titulo: 'meu-mooc' 
  }, 
  { 
    path: '/treinamento/:id', 
    component: Treinamento,
    name: 'treinamento' ,
    titulo: 'Treinamento meu-mooc' 
  }
];