# Dragonbane Foundry VTT Macros

A collection of macros and utilities for the Dragonbane RPG system in Foundry VTT. Most shoudld work in v12 and v13.

## Macros

**add-all-spells** - Adds all available spells from the Items directory to the selected token's character sheet, with confirmation dialog and duplicate checking. For testing purposes.

**convert-actors** - Converts actors between character, NPC, and monster types with a dialog interface for setting required attributes and properties.

**elf-inner-peace** - Performs a stretch rest for characters with the Inner Peace ability, rolling 2d6 for HP and 2d6 for WP recovery while properly formatting the chat message.

**enhanced-treasure-roll** - Rolls on the Treasure table with a configurable number of rolls (1-10) and whispers results to the GM, handling nested tables and broken references.

**force-multi-page-mode-journals** - Hooks into journal rendering to force all journals to open in multi-page mode automatically.

**remove-all-spells** - Removes all spell items from the selected token's character sheet with a confirmation prompt (for testing purposes). For testing purposes.

**summon-elemental** - Summons elementals at the appropriate power level using Foundry Summons 2 and Automated Animations modules.

## Code Snippets

**actor-edit-for-inner-peace.js** - System file replacement code for fixing the Inner Peace kin ability in the stretch rest function.

**status-effect-descriptions** - JSON configuration file containing descriptions and references for all Dragonbane status effects. For use with Dragonbane Status Effects.
