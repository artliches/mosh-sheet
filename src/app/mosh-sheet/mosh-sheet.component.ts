import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosh-sheet',
  templateUrl: './mosh-sheet.component.html',
  styleUrls: ['./mosh-sheet.component.scss']
})
export class MoshSheetComponent implements OnInit {

  constructor() { }

  nodes = Array.from({length: 15}, () => ({chosen: false}));
  conditions = Array.from({length: 3}, () => ({chosen: false}));

  charName = '';
  pronouns = '';
  personalNotes = '';
  stats = {
    str: '',
    spd: '',
    int: '',
    com: '',
  };
  saves = {
    san: '',
    fea: '',
    bod: '',
  };

  classes = [
    {
      class: 'MARINE',
      chosen: false,
      props: [
        '+10 COMBAT',
        '+10 BODY SAVE',
        '+20 FEAR SAVE',
        '+1 WOUND',
      ]
    },
    {
      class: 'ANDROID',
      chosen: false,
      props: [
        '+20 INTELLECT',
        '-10 TO 1 STAT',
        '+60 FEAR SAVE',
        '+1 WOUND',
      ]
    },
    {
      class: 'SCIENTIST',
      chosen: false,
      props: [
        '+10 INTELLECT',
        '+5 TO 1 STAT',
        '+30 SANITY SAVE',
      ]
    },
    {
      class: 'TEAMSTER',
      chosen: false,
      props: [
        '+5 TO ALL STATS',
        '+10 TO ALL SAVES',
      ]
    },
  ];

  numbersTrack = Array.from({length: 20}, () => ({chosen: false}));
  wounds = [
    {
      pos: 'one', chosen: false
    },
    {
      pos: 'two', chosen: false
    },
    {
      pos: 'three', chosen: false
    }
  ];
  healthTrack1 = Array.from({length: 20}, () => ({chosen: false}));
  healthTrack2 = Array.from({length: 20}, () => ({chosen: false}));
  healthTrack3 = Array.from({length: 20}, () => ({chosen: false}));

  traumaChoices = [
    {
      name: 'MARINE',
      descrip: 'WHENEVER YOU PANIC, EVERY NEARBY FRIENDLY PLAYER MUST MAKE A FEAR SAVE.',
      chosen: false
    },
    {
      name: 'ANDROID',
      descrip: 'FEAR SAVES MADE BY NEARBY FRIENDLY PLAYERS ARE AT DISADVANTAGE.',
      chosen: false
    },
    {
      name: 'SCIENTIST',
      descrip: 'WHENEVER YOU FAIL A SANITY SAVE, ALL NEARBY FRIENDLY PLAYERS GAIN 1 STRESS.',
      chosen: false
    },
    {
      name: 'TEAMSTER',
      descrip: 'ONCE PER SESSION, YOU MAY TAKE ADVANTAGE ON A PANIC CHECK.',
      chosen: false
    },
  ];

  stress = {
    cur: '',
    min: 2,
  };

  loadout = '';
  armorPoints = '';
  credits = '';

  startingSkills = [
    {
      name: 'MARINE',
      descrip: `
        <div>
            Military Training, Athletics
        </div>
        <div>
            Bonus: 1 Expert Skill
        </div>
        <div>
            OR: 2 Trained Skills
        </div>
      `,
      chosen: false
    },
    {
      name: 'ANDROID',
      descrip: `
        <div>
            Linguistics, Computers, Mathematics
        </div>
        <div>
            Bonus: 1 Expert Skill
        </div>
        <div>
            OR: 2 Trained Skills
        </div>
      `,
      chosen: false
    },
    {
      name: 'SCIENTIST',
      descrip: `
        <div>
            1 Master Skill* and an Expert and Trained Skill Prerequisite.
        </div>
        <div>
            Bonus: 1 Trained Skill
        </div>
        <div>
            *Not Command or Weapon Specialization.
        </div>
      `,
      chosen: false
    },
    {
      name: 'TEAMSTER',
      descrip: `
        <div>
            Industrial Equipment, Zero-G
        </div>
        <div>
            Bonus: 1 Trained Skill and 1 Expert Skill.
        </div>
      `,
      chosen: false
    }
  ];


  trainedSkills = [
    {name: 'LINGUISTICS', chosen: false },
    {name: 'ZOOLOGY', chosen: false },
    {name: '', chosen: false},
    {name: 'BOTANY', chosen: false},
    {name: 'GEOLOGY', chosen: false},
    {name: 'INDUSTRIAL EQUIPMENT', chosen: false},
    {name: 'JURY-RIGGING', chosen: false},
    {name: 'CHEMISTRY', chosen: false},
    {name: 'COMPUTERS', chosen: false},
    {name: 'ZERO-G', chosen: false},
    {name: 'MATHEMATICS', chosen: false},
    {name: 'ART', chosen: false},
    {name: 'ARCHAEOLOGY', chosen: false},
    {name: 'THEOLOGY', chosen: false},
    {name: 'MILITARY TRAINING', chosen: false},
    {name: 'RIMWISE', chosen: false},
    {name: 'ATHLETICS', chosen: false},
  ];

  expertSkills = [
    {name: 'PSYCHOLOGY', chosen: false},
    {name: 'PATHOLOGY', chosen: false},
    {name: 'FIELD MEDICINE', chosen: false},
    {name: 'ECOLOGY', chosen: false},
    {name: 'ASTEROID MINING', chosen: false},
    {name: 'MECHANICAL REPAIR', chosen: false},
    {name: 'EXPLOSIVES', chosen: false},
    {name: 'PHARMACOLOGY', chosen: false},
    {name: 'HACKING', chosen: false},
    {name: 'PILOTING', chosen: false},
    {name: 'PHYSICS', chosen: false},
    {name: 'MYSTICISM', chosen: false},
    {name: '', chosen: false},
    {name: 'TACTICS', chosen: false},
    {name: 'WILDERNESS SURVIVAL', chosen: false},
    {name: 'FIREARMS', chosen: false},
    {name: 'HAND-TO-HAND COMBAT', chosen: false},
  ];

  masterSkills = [
    {name: 'SOPHONTOLOGY', chosen: false},
    {name: 'EXOBIOLOGY', chosen: false},
    {name: 'SURGERY', chosen: false},
    {name: 'PLANETOLOGY', chosen: false},
    {name: 'ROBOTICS', chosen: false},
    {name: 'ENGINEERING', chosen: false},
    {name: 'CYBERNETICS', chosen: false},
    {name: '', chosen: false},
    {name: 'ARTIFICIAL INTELLIGENCE', chosen: false},
    {name: '', chosen: false},
    {name: 'HYPERSPACE', chosen: false},
    {name: 'XENOESOTERICISM', chosen: false},
    {name: '', chosen: false},
    {name: 'COMMAND', chosen: false},
    {name: '', chosen: false},
    {name: '', chosen: false},
    {name: '', chosen: false},
  ];

  skillTrainingInput = '';
  conditionInput1 = '';
  conditionInput2 = '';

  ngOnInit(): void {
    const character = localStorage.getItem('char');
    if (character) {
      const charData = character ? JSON.parse(character) : [];
      this.charName = charData[0].name;
      this.pronouns = charData[0].pronouns;
      this.personalNotes = charData[0].personalNotes;

      this.stats.str = charData[0].strStat;
      this.stats.spd = charData[0].spdStat;
      this.stats.int = charData[0].intStat;
      this.stats.com = charData[0].comStat;

      this.saves.san = charData[0].sanSave;
      this.saves.fea = charData[0].feaSave;
      this.saves.bod = charData[0].bodSave;

      this.classes = charData[0].class;

      this.numbersTrack = charData[0].maxHealth;
      this.wounds = charData[0].wounds;
      this.healthTrack1 = charData[0].hTrack1;
      this.healthTrack2 = charData[0].hTrack2;
      this.healthTrack3 = charData[0].hTrack3;

      this.stress.cur = charData[0].curStress;
      this.stress.min = charData[0].minStress;

      this.traumaChoices = charData[0].trauma;

      this.loadout = charData[0].loadout;
      this.armorPoints = charData[0].armor;
      this.credits = charData[0].credits;

      this.startingSkills = charData[0].startingSkills;
      this.trainedSkills = charData[0].trained;
      this.expertSkills = charData[0].expert;
      this.masterSkills = charData[0].master;

      this.nodes = charData[0].trainingNodes;
      this.skillTrainingInput = charData[0].skillTrainingInput;

      this.conditions = charData[0].conditions;
      this.conditionInput1 = charData[0].conditionInput1;
      this.conditionInput2 = charData[0].conditionInput2;
    } else {
      this.updateStorage();
    }
  }

  clearStorage(): void {
    localStorage.clear();
    location.reload();
  }

  updateStorage(): void {
    const currChar = [];
    currChar.push(
      {
        name: this.charName,
        pronouns: this.pronouns,
        personalNotes: this.personalNotes,

        strStat: this.stats.str,
        spdStat: this.stats.spd,
        intStat: this.stats.int,
        comStat: this.stats.com,

        sanSave: this.saves.san,
        feaSave: this.saves.fea,
        bodSave: this.saves.bod,

        class: this.classes,

        maxHealth: this.numbersTrack,
        wounds: this.wounds,
        hTrack1: this.healthTrack1,
        hTrack2: this.healthTrack2,
        hTrack3: this.healthTrack3,

        curStress: this.stress.cur,
        minStress: this.stress.min,

        trauma: this.traumaChoices,

        loadout: this.loadout,
        armor: this.armorPoints,
        credits: this.credits,

        startingSkills: this.startingSkills,
        trained: this.trainedSkills,
        expert: this.expertSkills,
        master: this.masterSkills,

        trainingNodes: this.nodes,
        skillTrainingInput: this.skillTrainingInput,

        conditions: this.conditions,
        conditionInput1: this.conditionInput1,
        conditionInput2: this.conditionInput2,
      }
    );
    localStorage.setItem('char', JSON.stringify(currChar));
  }

  choose(node: any, onlyOne?: boolean, mainObj?: any): void {
    if (onlyOne) {
      this.onlyOne(mainObj);
    }
    node.chosen = !node.chosen;
    this.updateStorage();
  }

  chooseViaIndex(node: any, index: number, onlyOne?: boolean, limitWounds?: boolean): void {
    if (onlyOne) {
      this.onlyOne(node);
    }
    node[index].chosen = !node[index].chosen;
    this.updateStorage();
  }

  onlyOne(mainObj: any): void {
    for (const key in mainObj) {
      if (mainObj.hasOwnProperty(key)) {
        mainObj[key].chosen = false;
      }
    }
  }
}
