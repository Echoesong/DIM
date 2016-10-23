(function() {
  "use strict";

  // See https://angular-translate.github.io/docs/#/guide
  angular.module('dimApp')
    .config(['$translateProvider', function($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escape');

      $translateProvider
        .translations('en', {
          Level: "Level",
          Weapons: "Weapons",
          Armor: "Armor",
          General: "General",
          Postmaster: "Postmaster",
          Equip: "Equip",
          Store: "Store",
          Vault: "Vault",
          Vanguard: "Vanguard",
          Reputation: "Reputation",
          Intellect: "Intellect",
          Discipline: "Discipline",
          Strength: "Strength",
          Super_cooldown: "Super cooldown",
          Grenade_cooldown: "Grenade cooldown",
          Melee_cooldown: "Melee cooldown",
          tier_progress: "{{progress}} for {{tier}}",
          About: "About",
          'Support DIM': "Support DIM",
          Vendors: "Vendors",
          Support: "Support",
          Settings: "Settings",
          filter_help: "Search item/perk or is:arc",
          'Tag Item': "Tag Item",
          Favorite: "Favorite",
          Keep: "Keep",
          Junk: "Junk",
          Infuse: "Infuse",
          notes_placeholder: "Add notes to this item",
          before_loadout: "Before '{{name}}'",
          'Create Loadout': "Create Loadout",
          loadout_from_equipped: "Equipped",
          'Edit Loadout': "Edit Loadout",
          'Delete Loadout': "Delete Loadout",
          apply_search_loadout: "Items = \"{{query}}\"",
          'Maximize Light': "Maximize Light",
          'Item Leveling': "Item Leveling",
          'Gather Engrams': "Gather Engrams",
          gather_engrams_except_exotics: "Exotics",
          farming_mode: "Farming Mode (move items)",
          restore_all_items: "All Items",
          Loadouts: "Loadouts",
          Progress: "Progress",
          LoadoutAppliedAuto: "Automatic Loadout Builder",
          LoadoutApplied: "Your loadout of {{amount}} items have been transferred to your {{store}}.",
          LoadoutAppliedError: "None of the items in your loadout could be transferred.",
          LoadoutAppliedWarn: "Your loadout has been partially transferred, but {{failed}} of {{total}} items had errors.",
          BackToDIM: "Back to DIM",
          LoadoutBuilder: "Loadout Builder",
          ShowGear: "Show {{class}} gear",
          LBLocked: "Locked Items",
          LBLockedHelp: "Drag and drop any item into its bucket to build set with that specific gear. Shift + click to exclude items.",
          FilterSets: "Filter sets",
          AdvancedOptions: "Advanced Options",
          Fast: "Fast",
          Full: "Full",
          ProcessingMode: "Processing mode",
          ProcessingModeHelpFast: "Only looks at your best gear.",
          ProcessingModeHelpFull: "Looks at more gear, but takes longer.",
          Scaled: "Scaled",
          Current: "Current",
          LightMode: "Light mode",
          LightModeHelpScaled: "Calculates loadouts as if all items were 335 defense.",
          LightModeHelpCurrent: "Calculates loadouts at current defense levels.",
          LBIncludeRare: "Include rare (blue) items",
          LBhelp: "Need help?",
          LBEquip: "Equip on Current Character",
          LBShowAllConfigs: "Show all configurations",
          LBHideAllConfigs: "Hide all configurations",
          LBLoading: "Loading best sets ({{percentage}}%)",
          LBVendor: "Include Vendor items",
          LBExclude: "Excluded Items",
          LBExcludeHelp: "Shift + click an item (or drag and drop into this bucket) to build sets without specific gear.",
          LBLockPerk: "Lock perk",
          LBMissing1: "Missing legendary or exotic pieces to build a full set!",
          LBMissing2: "Missing rare, legendary, or exotic pieces to build a full set!",
          ManifestBuild: "Building Destiny info database",
          ManifestError1: "Error loading Destiny info: ",
          ManifestError2: "Reload to retry.",
          ManifestDownload: "Downloading latest Destiny info from Bungie",
          ManifestUnzip: "Unzipping latest Destiny info",
          ManifestSave: "Saving latest Destiny info",
          ArmorAndWeapons: "Armor & Weapons",
          ShipsAndVehicles: "Ships & Vehicles",
          Consumables: "Consumables",
          Bounties: "Bounties",
          ShadersAndEmblems: "Shaders & Emblems",
          Emotes: "Emotes"
        })
        .translations('it', {
          Level: "Livello",
          Weapons: "Armi",
          Armor: "Armatura",
          General: "Generale",
          Postmaster: "Amministratrice",
          Equip: "Equipaggia",
          Store: "Memorizzare",
          Vault: "Depositi",
          Vanguard: "Avanguardia",
          Reputation: "Reputazione",
          Intellect: "Intelletto",
          Discipline: "Disciplina",
          Strength: "Forza",
          Super_cooldown: "Super tempo di recupero",
          Grenade_cooldown: "Granate tempo di recupero",
          Melee_cooldown: "Corpo a corpo tempo di recupero",
          tier_progress: "{{progress}} per {{tier}}",
          About: "Chi siamo",
          'Support DIM': "Aiutare DIM",
          Vendors: "Mercanti",
          Support: "Aiutare",
          Settings: "Impostazioni",
          'Tag Item': "Elemento Tag",
          Favorite: "Preferito",
          Keep: "Tenere",
          Junk: "Giunca",
          Infuse: "Infondi",
          notes_placeholder: "Aggiungere note a questa voce",
          'Create Loadout': "Creare Loadout",
          loadout_from_equipped: "Fornito",
          'Edit Loadout': "Modifica Loadout",
          'Delete Loadout': "Cancellare Loadout",
          apply_search_loadout: "Elementi = \"{{query}}\"",
          'Maximize Light': "Massimizzare la Luce",
          'Item Leveling': "Elemento di Livellamento",
          'Gather Engrams': "Raccogliere Engram",
          gather_engrams_except_exotics: "Esotiche",
          farming_mode: "Engram a Depositi (Coltura)",
          restore_all_items: "Tutti gli Elementi",
          Loadouts: "Loadouts",
          Progress: "Progesso"
        })
        .translations('de', {
          Weapons: "Waffen",
          Armor: "Rüstung",
          General: "Allgemein",
          Postmaster: "Poststelle",
          Equip: "Ausrüsten",
          Store: "Verstauen",
          Vault: "Tresor",
          Vanguard: "Vorhut",
          Reputation: "Ruf",
          Intellect: "Intellekt",
          Discipline: "Disziplin",
          Strength: "Stärke",
          Super_cooldown: "Super Abklingzeit",
          Grenade_cooldown: "Granaten Abklingzeit",
          Melee_cooldown: "Nahkampf Abklingzeit",
          tier_progress: "{{progress}} für {{tier}}",
          About: "Über",
          'Support DIM': "DIM Unterstützen",
          Vendors: "Händler",
          Support: "Unterstützen",
          Settings: "Einstellungen",
          'Tag Item': "Tag Artikel",
          Favorite: "Favorit",
          Keep: "Behalten",
          Junk: "Trödel",
          Infuse: "Infundieren",
          notes_placeholder: "Hinzufügen von Anmerkungen zu diesem Artikel",
          'Create Loadout': "Loadout erstellen",
          loadout_from_equipped: "Aus angelegter Ausrüstung",
          'Edit Loadout': "Loadout bearbeiten",
          'Delete Loadout': "Loadout löschen",
          apply_search_loadout: "Gegenstand = \"{{query}}\"",
          'Maximize Light': "Licht maximieren",
          'Item Leveling': "Gegenstand aufwerten",
          'Gather Engrams': "Engramme sammeln",
          gather_engrams_except_exotics: "Exotics",
          farming_mode: "Engramme zum Tresor",
          restore_all_items: "Alle Elemente",
          Loadouts: "Loadouts",
          Progress: "Fortschritt",
          LoadoutAppliedAuto: "Automatischer Loadout Builder",
          LoadoutApplied: "Dein Loadout aus {{amount}} Gegenständen wurde zu {{store}} übertragen.",
          LoadoutAppliedError: "Keiner der Gegenstände in deinem Loadout konnte übertragen werden.",
          LoadoutAppliedWarn: "Dein Loadout wurde teilweise angewendet, aber {{failed}} von {{total}} Gegenständen waren fehlerhaft.",
          BackToDIM: "Zurück zu DIM",
          LoadoutBuilder: "Loadout Builder",
          ShowGear: "Zeige {{class}} Ausrüstung",
          LBLocked: "Gesperrte Gegenstände",
          LBLockedHelp: "Ziehe einen beliebigen Gegenstand in sein Feld, um ihn für generierten Loadouts festzulegen. Mit Shift + Klick kannst du Gegenstände ignorieren.",
          FilterSets: "Sets filtern",
          AdvancedOptions: "Fortgeschrittene Optionen",
          Fast: "Schnelle",
          Full: "Vollständige",
          ProcessingMode: "Berechnung",
          ProcessingModeHelpFast: "Nur die beste Ausrüstung wird einbezogen.",
          ProcessingModeHelpFull: "Beziehen die ganze Ausrüstung mit ein.",
          Scaled: "Skaliertes",
          Current: "Aktuelles",
          LightMode: "Lichtlevel",
          LightModeHelpScaled: "Berechnet Loadouts, bei denen alle Gegenstände Lichtlevel 335 besitzen.",
          LightModeHelpCurrent: "Berechnet Loadouts mit dem aktuellen Lichtlevel der Gegenstände.",
          LBIncludeRare: "Seltene (blaue) Gegenstände einbeziehen",
          LBhelp: "Brauchst du Hilfe?",
          LBEquip: "Am aktuellen Charakter anlegen.",
          LBShowAllConfigs: "Zeige alle Varianten",
          LBHideAllConfigs: "Verstecke alle Varianten",
          LBLoading: "Lade die besten Sets ({{percentage}}%)",
          LBVendor: "Gegenstände von Händlern einschließen",
          LBExclude: "Ignorierte Gegenstände",
          LBExcludeHelp: "Benutze Shift + Klick bei einem Gegenstand (oder ziehe ihn in dieses Feld) um Sets ohne diesen Gegenstand zu generieren.",
          LBLockPerk: "Perk festlegen",
          LBMissing1: "Es fehlen legendäre oder exotische Gegenstände, um ein vollständiges Set zu generieren!",
          LBMissing2: "Es fehlen seltene, legendäre oder exotische Gegenstände, um ein vollständiges Set zu generieren",
          ManifestBuild: "Lege Destiny Datenbank an",
          ManifestError1: "Fehler beim Laden von Informationen: ",
          ManifestError2: "App neu laden, um es nochmals zu versuchen.",
          ManifestDownload: "Lade neueste Daten von Bungie herunter",
          ManifestUnzip: "Entpacke neueste Daten",
          ManifestSave: "Speichere neueste Daten",
          ArmorAndWeapons: "Panzerung & Waffen",
          ShipsAndVehicles: "Schiffe & Fahrzeuge",
          Consumables: "Verbrauchsgegenstände",
          Bounties: "Beutezüge",
          ShadersAndEmblems: "Shader & Embleme",
          Emotes: "Emotes"
        })
        .translations('fr', {
          Level: "Niveau",
          Weapons: "Armes",
          Armor: "Armure",
          General: "Général",
          Postmaster: "Commis des postes",
          Equip: "Équiper",
          Store: "Stocker",
          Vault: "Coffres",
          Vanguard: "Avant-garde",
          Reputation: "Estime",
          Intellect: "Intelligence",
          Discipline: "Discipline",
          Strength: "Force",
          Super_cooldown: "Régénération du Super",
          Grenade_cooldown: "Régénération de Grenade",
          Melee_cooldown: "Régénération de Mêlée",
          tier_progress: "{{progress}} pour {{tier}}",
          About: "À propos",
          'Support DIM': "Soutien DIM",
          Vendors: "Marchands",
          Support: "Soutien",
          Settings: "Paramètres",
          'Tag Item': "Tagger Article",
          Favorite: "Préféré",
          Keep: "Garder",
          Junk: "Camelote",
          Infuse: "Infuser",
          notes_placeholder: "Ajouter des notes à cet article",
          'Create Loadout': "Créer Loadout",
          loadout_from_equipped: "Equipé",
          'Edit Loadout': "Modifier Loadout",
          'Delete Loadout': "Effacer Loadout",
          apply_search_loadout: "Articles = \"{{query}}\"",
          'Maximize Light': "Maximiser la Lumière",
          'Item Leveling': "Evolution d'article",
          'Gather Engrams': "Rassembler les Engrammes",
          gather_engrams_except_exotics: "Exotiques",
          farming_mode: "Engrammes aux Coffres (mode Farm)",
          restore_all_items: "Tous les Articles",
          Loadouts: "Loadouts",
          LoadoutAppliedAuto: "Constructeur de Loadout automatique",
          LoadoutApplied: "Votre loadout de {{amount}} articles a été transféré à votre {{store}}",
          LoadoutAppliedError: "Aucun des articles de votre loadout n'a pu être transféré.",
          LoadoutAppliedWarn: "Votre loadout a été partiellement transféré, mais {{failed}} sur {{total}} articles ont échoué."
        })
        .translations('es', {
          Level: "Nivel",
          Weapons: "Armas",
          Armor: "Armadura",
          Postmaster: "Administración",
          Equip: "Equipar",
          Store: "Almacenar",
          Vault: "Depósito",
          Vanguard: "Vanguardia",
          Reputation: "Reputación",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Fuerza",
          Super_cooldown: "Super tiempo",
          Grenade_cooldown: "Granade tiempo",
          Melee_cooldown: "Cuerpo a cuerpo tiempo",
          tier_progress: "{{progress}} por {{tier}}",
          About: "Sobre",
          'Support DIM': "Apoyo DIM",
          Vendors: "Comerciantes",
          Support: "Apoyo",
          Settings: "Configuración",
          'Tag Item': "Elemento de Etiqueta",
          Favorite: "Favorito",
          Keep: "Guardar",
          Junk: "Basura",
          Infuse: "Infundir",
          notes_placeholder: "Agregar notas a este artículo",
          'Create Loadout': "Crear Loadout",
          loadout_from_equipped: "Equipado",
          'Edit Loadout': "Editar Loadout",
          'Delete Loadout': "Borrar Loadout",
          apply_search_loadout: "Artículos = \"{{query}}\"",
          'Maximize Light': "Maximizar la Luz",
          'Item Leveling': "Nivelación Elemento",
          'Gather Engrams': "Recopilar Engramas",
          gather_engrams_except_exotics: "Exóticas",
          farming_mode: "Engramas a Depósito (Agricultura)",
          restore_all_items: "Todos los Artículos",
          Loadouts: "Loadouts",
          Progress: "Progreso"
        })
        .translations('ja', {
          Level: "レベル",
          Weapons: "武器",
          Armor: "よろい",
          General: "全般",
          Postmaster: "ポストマスター",
          Equip: "装備する",
          Vault: "装備",
          Vanguard: "バンガード",
          Reputation: "評価",
          Intellect: "知性",
          Discipline: "鍛錬",
          Strength: "腕力",
          About: "紹介",
          'Support DIM': "サポート DIM",
          Vendors: "ベンダー",
          Support: "サポート",
          Settings: "設定",
          'Tag Item': "タグアイテム",
          Favorite: "本命",
          Keep: "保つ",
          Junk: "ジャンク",
          Infuse: "煎じる",
          notes_placeholder: "このアイテムにメモを追加",
          'Create Loadout': "作る Loadout",
          loadout_from_equipped: "備える",
          'Edit Loadout': "編集 Loadout",
          'Delete Loadout': "削除 Loadout",
          apply_search_loadout: "箇条 = \"{{query}}\"",
          'Maximize Light': "ライトを最大化",
          'Item Leveling': "アイテムの平準化",
          'Gather Engrams': "エングラムを収集",
          gather_engrams_except_exotics: "エキゾチック",
          farming_mode: "エングラムは、 装備 (農業)",
          restore_all_items: "品揃え",
          Loadouts: "Loadouts",
          Progress: "進捗"
        })
        .translations('pt-br', {
          Level: "Nível",
          Weapons: "Armas",
          Armor: "Armaduras",
          General: "Geral",
          Postmaster: "Chefe do Correio",
          Equip: "Equipar",
          Store: "Armazenar",
          Vault: "Cofre",
          Vanguard: "Vanguarda",
          Reputation: "Reputação",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Força",
          Super_cooldown: "Tempo de carga da Super",
          Grenade_cooldown: "Tempo de carga da granada",
          Melee_cooldown: "Tempo de carga do corpo-a-corpo",
          tier_progress: "{{progress}} para {{tier}}",
          About: "Sobre",
          'Support DIM': "Apoie o DIM",
          Vendors: "Vendedores",
          Support: "Apoio",
          Settings: "Configurações",
          filter_help: "Buscar item/perk ou is:arc",
          'Tag Item': "Marcar item",
          Favorite: "Favorito",
          Keep: "Guardar",
          Junk: "Lixo",
          Infuse: "Infundir",
          notes_placeholder: "Adicionar observações a este item",
          before_loadout: "Antes '{{name}}'",
          'Create Loadout': "Criar Loadout",
          loadout_from_equipped: "Equipado",
          'Edit Loadout': "Editar Loadout",
          'Delete Loadout': "Excluir Loadout",
          apply_search_loadout: "Itens = \"{{query}}\"",
          'Maximize Light': "Maximizar a Luz",
          'Item Leveling': "Nivelamento de item",
          'Gather Engrams': "Obter engramas",
          gather_engrams_except_exotics: "Exóticos",
          farming_mode: "Modo Farm (mover engramas)",
          restore_all_items: "Todos os itens",
          Loadouts: "Loadouts",
          Progress: "Progresso",
          LoadoutAppliedAuto: "Construtor automático de Loadouts",
          LoadoutApplied: "Seu loadout de {{amount}} itens foram transferidos para seu {{store}}.",
          LoadoutAppliedError: "Nenhum item em seu Loadout pode ser transferido.",
          LoadoutAppliedWarn: "Seu Loadout foi parcialmente transferido, mas {{failed}} de {{total}} itens retornaram erros."
        })
        .fallbackLanguage('en');
    }]);
})();
