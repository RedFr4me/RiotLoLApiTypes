declare global {
  interface SummonerV4 {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }

  interface LeagueV4 {
    leagueId: string;
    queueType: string;
    tier: string;
    rank: string;
    summonerId: string;
    summonerName: string;
    leaguePoints: number;
    wins: number;
    losses: number;
    veteran: boolean;
    inactive: boolean;
    freshBlood: boolean;
    hotStreak: boolean;
  }

  interface MatchHistoryV5 {
    matchIds: string[];
  }

  interface MatchV5 {
    metadata: MetadataV5;
    info: InfoV5;
  }

  interface MetadataV5 {
    dataVersion: string;
    matchId: string;
    participants: string[];
  }

  interface InfoV5 {
    gameCreation: number;
    gameDuration: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: ParticipantV5[];
    platformId: string;
    queueId: number;
    teams: TeamV5[];
    tournamentCode: string;
  }

  interface TeamV5 {
    bans: BanV5[];
    objectives: ObjectiveV5;
    teamId: number;
    win: boolean;
  }

  interface BanV5 {
    championId: number;
    pickTurn: number;
  }

  interface ObjectiveV5 {
    baron: ObjectiveDetailsV5;
    champion: ObjectiveDetailsV5;
    dragon: ObjectiveDetailsV5;
    inhibitor: ObjectiveDetailsV5;
    riftHerald: ObjectiveDetailsV5;
    tower: ObjectiveDetailsV5;
  }

  interface ObjectiveDetailsV5 {
    first: boolean;
    kills: number;
  }

  interface PerksV5 {
    statPerks: StatPerksV5;
    styles: StyleV5[];
  }

  interface StatPerksV5 {
    defense: number;
    flex: number;
    offense: number;
  }

  interface StyleV5 {
    description: string;
    selections: SelectionV5[];
    style: number;
  }

  interface SelectionV5 {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
  }

  interface ChallengesV5 {
    '12AssistStreakCount': number;
    abilityUses: number;
    acesBefore15Minutes: number;
    alliedJungleMonsterKills: number;
    baronTakedowns: number;
    blastConeOppositeOpponentCount: number;
    bountyGold: number;
    buffsStolen: number;
    completeSupportQuestInTime: number;
    controlWardTimeCoverageInRiverOrEnemeyHalf: number;
    controlWardsPlaced: number;
    damagePerMinute: number;
    damageTakenOnTeamPercentage: number;
    dancedWithRiftHerald: number;
    deathsByEnemyChamps: number;
    dodgeSkillshotsSmallWindow: number;
    doubleAces: number;
    dragonTakedowns: number;
    earliestBaron: number;
    earlyLaningPhaseGoldExpAdvantage: number;
    effectiveHealAndShieling: number;
    elderDragonKillsWithOpposingSoul: number;
    elderDragonMultiKills: number;
    enemyChampionImmobilizations: number;
    enemyJungleMonsterKills: number;
    epicMonsterKillsNearEnemyJungler: number;
    epicMonsterKillsWithin30SecondsOfSpawn: number;
    epicMonsterSteals: number;
    epicMonsterStolenWithoutSmite: number;
    firstTurretKilled: number;
    firstTurretKilledTime: number;
    flawlessAces: number;
    fullTeamTakedown: number;
    gameLength: number;
    getTakedownsInAllLanesEarlyJungleAsLaner: number;
    goldPerMinute: number;
    hadOpenNexus: number;
    immobilizeAndKillWithAlly: number;
    initialBuffCount: number;
    initialCrabCount: number;
    jungleCSBefore10Minutes: number;
    junglerTakedownsNearDamagedEpicMonster: number;
    kTurretsDestroyedBeforePlatesFall: number;
    kda: number;
    killAfterHiddenWithAlly: number;
    killParticipation: number;
    killedChampTookFullTeamDamageSurvived: number;
    killingSprees: number;
    killsNearEnemyTurret: number;
    killsOnOtherLanesEarlyJungleAsLaner: number;
    killsOnRecentlyHealedByAramPack: number;
    killsUnderOwnTurret: number;
    killsWithHelpFromEpicMonster: number;
    knockEnemyIntoTeamAndKill: number;
    landSkillShotsEarlyGame: number;
    laneMinionsFirst10Minutes: number;
    laningPhaseGoldExpAdvantage: number;
    legendaryCount: number;
    lostAnInhibitor: number;
    maxCsAdvantageOnLaneOpponent: number;
    maxKillDeficit: number;
    maxLevelLeadLaneOppoent: number;
    mejaisFullStackInTime: number;
    moreEnemyJungleThanOpponent: number;
    multiKillInOneSpell: number;
    multiTurretRiftHeraldCount: number;
    multiKills: number;
    multiKillsAfterAgrresiveFlash: number;
    mythicItemUsed: number;
    outerTurretExecutesBefore10Minutes: number;
    outnumberedKills: number;
    outnumeberedNexusKills: number;
    perfectDragonSoulsTaken: number;
    perfectGame: number;
    pickKillWithAlly: number;
    playedChampSelectionPosition: number;
    poroExplosions: number;
    quickCleanse: number;
    quickFirstTurret: number;
    quickSoloKills: number;
    riftHeraldTakedowns;
    saveAllyFromDeath: number;
    scuttleCrabKills: number;
    skillshotsDodged: number;
    skillshotsHit: number;
    snowballsHit: number;
    soloBaronKills: number;
    soloKills: number;
    soloTurretLateGame: number;
    stealthWardsPlaced: number;
    survidedSingleDigitHpCount;
    survivedThreeImmobilizesInFight: number;
    takedownOnFirstTurret: number;
    takedowns: number;
    takedownsAfterGainingLevelAdvantage: number;
    takedownsBeforeJungleMinionsSpawn: number;
    takedownsFirstXMinutes: number;
    takedownsInAlcove: number;
    takedownsInEnemyFountain: number;
    teamBaronKills: number;
    teamDamagePercentage: number;
    teamElderDragonKills: number;
    teamRiftHeraldKills: number;
    tookLargeDamageSurvivded: number;
    turretPlatesTaken: number;
    turretTakedowns: number;
    turretsTakenWithRiftHerald: number;
    twentyMinionsIn3SecondsCount: number;
    twoWardsOneSweeperCount: number;
    unseenRecalls: number;
    visionScoreAdvantageLaneOpponent: number;
    visionScorePerMinute: number;
    warkTakedowns: number;
    wardTakedownsBefore20M: number;
    wardsGuarded: number;
  }

  interface MissionsV5 {
    playerScore0: number;
    playerScore1: number;
    playerScore2: number;
    playerScore3: number;
    playerScore4: number;
    playerScore5: number;
    playerScore6: number;
    playerScore7: number;
    playerScore8: number;
    playerScore9: number;
  }

  interface ParticipantV5 {
    allInPings: number;
    assistMePings: number;
    assists: number;
    baitPings: number;
    baronKills: number;
    basicPings: number;
    bountyLevel: number;

    challenges: ChallengesV5;

    champExperience: number;
    champLevel: number;
    championId: number;
    championName: string;
    championTransform: number;
    commandPings: number;
    consumablesPurchased: number;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMitigated: number;
    dangerPings: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    eligibleForProgression: boolean;
    enemyMissingPings: number;
    enemyVisionPings: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    gameEndedInEarlySurrender: boolean;
    gameEndedInSurrender: boolean;
    getBackInPings: number;
    goldEarned: number;
    goldSpent: number;
    holdPings: number;
    individualPosition: string;
    inhibitorKills: number;
    inhibitorTakedowns: number;
    inhibitorsLost: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    kills: number;
    lane: string;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    longestTimeSpentLiving: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;

    missions: MissionsV5;

    needVisionPings: number;
    neutralMinionsKilled: number;
    nexusKills: number;
    nexusLost: number;
    nexusTakedowns: number;
    objectivesStolen: number;
    objectivesStolenAssists: number;
    onMyWayPings: number;
    participantId: number;
    pentaKills: number;

    perks: PerksV5;

    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    placement: number;
    playerAugment1: number;
    playerAugment2: number;
    playerAugment3: number;
    playerAugment4: number;
    playerScore0: number;
    playerScore1: number;
    playerScore2: number;
    playerScore3: number;
    playerScore4: number;
    playerScore5: number;
    playerScore6: number;
    playerScore7: number;
    playerScore8: number;
    playerScore9: number;
    playerSubteamId: number;
    profileIcon: number;
    pushPings: number;
    puuid: string;
    quadraKills: number;
    riotIdName: string;
    riotIdTagline: string;
    role: string;
    sightWardsBoughtInGame: number;
    spell1Casts: number;
    spell2Casts: number;
    spell3Casts: number;
    spell4Casts: number;
    subteamPlacement: number;
    summoner1Casts: number;
    summoner1Id: number;
    summoner2Casts: number;
    summoner2Id: number;
    summonerId: string;
    summonerLevel: number;
    summonerName: string;
    teamEarlySurrendered: boolean;
    teamId: number;
    teamPosition: string;
    timeCCingOthers: number;
    timePlayed: number;
    totalAllyJungleMinionsKilled: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken: number;
    totalEnemyJungleMinionsKilled: number;
    totalHeal: number;
    totalHealsOnTeammates: number;
    totalMinionsKilled: number;
    totalTimeCCDealt: number;
    totalTimeSpentDead: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turretKills: number;
    turretTakedowns: number;
    turretsLost: number;
    unrealKills: number;
    visionScore: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
  }

  interface ValidRegions {
    BR1: string;
    EUN1: string;
    EUW1: string;
    JP1: string;
    KR: string;
    LA1: string;
    LA2: string;
    NA1: string;
    OC1: string;
    TR1: string;
    RU: string;
  }

  interface ValidPlatforms {
    AMERICAS: string;
    EUROPE: string;
    ASIA: string;
    SEA: string;
  }
}

export default global;
