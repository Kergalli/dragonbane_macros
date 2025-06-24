@patrikp recently updated the Dragonbane system to 2.5 which fixed the Automated Animations issue.  Since AA is reliant on the Roll Damage button, you cannot use AA to animate spells that do not have a Damage or Damage per Power Level value.

Before even playing around with macros, it can be said that a non-mathematical value in the Damage field will allow AA to function, the tradeoff is you will receive a Roll Damage button for all spells cast (a non-mathematical value will make the button non-functional for those spells)....but of course that is a little bit messy...so....macros!

These macros use the following add-ons:
- Item Macro (https://foundryvtt.com/packages/itemacro)
- Sequencer
- JB2A Animations or something similar
- Various sound files

Both macros will check for caster and target selection, if the caster has enough WP, if the caster knows the spell or trick. For tricks it will prompt the dialog box and manage the WP spend. For spell rolls, it will follow the normal spellcasting path.

You will need to update the sound and animation paths accordingly and enable/disable the  token.actor.toggleStatusEffect section. You should really need the StatusEffect unless you are writing custom effects with something like Condition Lab for spells like Longstrider or Birdsong.

The chat cards with spell description is definitely not necessary, and they will only trigger for non-damage spells. Might be nice just for Magic Tricks so there is something in the chat...

There are plenty of options when building out the Sequencer portions for sound and animations. I just included the basics. Watch .atLocation when setting up spells. Sequencer options can be found here: https://fantasycomputer.works/FoundryVTT-Sequencer/#/basics

These will allow you to animate non-damage spells, while preserving the gameplay feel of spells animated with AA. Failed spell rolls and successfully pushed spell rolls will not animate.

This is my first real attempt at customizing my upcoming Dragonbane game, and first real macro attempt over a handful of lines. I am positive there are a few ways to condense this and fallback on existing functions - open to all suggestions...I have a ton to learn. 
