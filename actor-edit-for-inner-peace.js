// Inner Peace stretch rest fix for the Dragonbane RPG
// Replace the restStretch section in systems\dragonbane\modules\actor.js with the following
// Thanks to abeven-sudo for the inspiration

  async restStretch() {
    await this.update({ ["system.canRestStretch"]: false });

    let numdice = "1";

    // Adjust for Inner Peace kin ability
    if (
      this.items.some(
        (item) => item.name === "Inner Peace" && item.type === "ability"
      )
    ) {
      numdice = "2";
    }

    // Make roll
    const roll = await new Roll(
      `${numdice}D6[${game.i18n.localize(
        "DoD.secondaryAttributeTypes.hitPoints"
      )}] + ${numdice}D6[${game.i18n.localize(
        "DoD.secondaryAttributeTypes.willPoints"
      )}]`
    ).roll({});
