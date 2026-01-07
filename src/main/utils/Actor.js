class Actor {
    constructor(name) {
      this.name = name;
      this.abilities = new Map();
    }
  
    whoCan(ability) {
      this.abilities.set(ability.constructor.name, ability);
      return this;
    }
  
    abilityTo(AbilityClass) {
      const ability = this.abilities.get(AbilityClass.name);
      if (!ability) {
        throw new Error(`${this.name} no tiene la habilidad ${AbilityClass.name}`);
      }
      return ability;
    }
  
    async attemptsTo(...tasks) {
      for (const task of tasks) {
        await task.performAs(this);
      }
    }
  
    async answers(question) {
      return await question.answeredBy(this);
    }
  }
  
  module.exports = { Actor };
  