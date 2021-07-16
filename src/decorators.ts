/* eslint-disable arrow-body-style */

const injectables: { [key: string]: any } = {};

export const Injectable = (): Function => {
  return (Target: any) => {
    const key: string = Target.name;
    injectables[key] = new Target();
  };
};

export const Inject = (className: string): Function => {
  return (target: any, key: string): void => {
    Object.defineProperty(target, key, {
      get: () => injectables[className],
      enumerable: true,
      configurable: true,
    });
  };
};
