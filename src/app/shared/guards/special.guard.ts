import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const specialGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  router.navigate(['not-available'])
  return false

};
