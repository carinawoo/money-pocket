import s from './welcome.module.scss';
import exchange from '../../assets/icons/exchange.svg';
import { FunctionalComponent } from 'vue';

export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <img src={exchange}/>
    <h2>会挣钱<br />还会省钱</h2>
  </div>
}

First.displayName = 'First'