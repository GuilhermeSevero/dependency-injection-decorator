/* eslint-disable arrow-body-style */

import { context } from './context';

export const Injectable = (): Function => {
  return (Target: any) => {
    context.addInjectable(Target);
  };
};

export const Inject = (className: string): Function => {
  return (target: any, key: string): void => {
    Object.defineProperty(target, key, {
      get: () => context.getInjectable(className),
      enumerable: true,
      configurable: true,
    });
  };
};
