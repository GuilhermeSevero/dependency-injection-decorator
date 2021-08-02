class Context {
  private injectables: { [key: string]: any } = {};

  addInjectable(TargetClass: any): void {
    const key: string = TargetClass.name;
    this.setInjectable(key, new TargetClass());
  }

  getInjectable(key: string): any {
    return this.injectables[key];
  }

  setInjectable(key: string, newObject: any): void {
    this.injectables[key] = newObject;
  }
}

export const context = new Context();
