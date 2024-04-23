import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacionGuard = () => {
  const route = inject(Router);

  if (localStorage.getItem('keys')){
    return true;
  }else{
    route.navigate(['/landing'])
    return false
  }

};
