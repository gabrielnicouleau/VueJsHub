<template>
  <h1 class="mt-5">TP Jeu Tour par Tour:</h1>
  <div class="mt-5 p-4 rounded border bg-danger bg-opacity-10">
    <div v-if="gagnant">
      <!-- Affichage du résultat du jeu -->
      <h2 v-if="gagnant === 'joueur'" class="text-success">VICTOIRE</h2>
      <img v-if="gagnant === 'joueur'" src="../../assets/TP/Ryu-win-screen.webp" alt="image de fin de combat" class="finCombat">
      <h2 v-if="gagnant === 'adversaire'" class="text-danger">PERDU</h2>
      <img v-if="gagnant === 'adversaire'" src="../../assets/TP/ken-win-screen.webp" alt="image de fin de combat" class="finCombat">
    </div>

    <div v-else>
      <div class="border p-3 rounded mb-3 bg-white">
        <h5 class="mt-3 mb-2">Adversaire</h5>
        <!-- Image de l'adversaire (GIF de base) -->
        <img :src="gifAdversaire" alt="Adversaire" :class="['image-personnage', { 'attaque': adversaireActive }]">

        <!-- Barre de vie de l'adversaire -->
        <div class="barre-de-vie">
          <div class="vie" :style="{ width: vieAdversaire + '%' }"></div>
        </div>
      </div>
      
      <div class="border p-3 rounded mb-3 bg-white">
        <h5 class="mt-3 mb-2">Joueur</h5>
        <!-- Image du joueur (GIF de base) -->
        <img :src="gifJoueur" alt="Joueur" :class="['image-personnage', { 'attaque': joueurActive }, { 'soin': joueurSoin }, { 'attaqueSpe': joueurRage }]">

        <!-- Barre de vie du joueur -->
        <div class="barre-de-vie">
          <div class="vie" :style="{ width: vieJoueur + '%' }"></div>
        </div>
      </div>


      <!-- Boutons d'action avec images -->
      <button @click="attaquerAdversaire" :disabled="actionEnCours" class="me-2 bg-primary bg-opacity-50">
        <img src="https://www.pngarts.com/files/2/Thug-Life-Fist-Transparent-Image.png" alt="Attaquer">Attaquer
      </button>

      <button @click="attaqueSpecialeAdversaire" :disabled="rechargeSpeciale > 0 || actionEnCours" class="me-2 bg-danger bg-opacity-50">
        <img src="https://png.pngtree.com/png-clipart/20220921/ourmid/pngtree-fire-logo-png-image_6209600.png" alt="Attaque Spéciale">Attaque Spéciale
      </button>

      <button @click="soignerJoueur" :disabled="actionEnCours" class="me-2 bg-success bg-opacity-50">
        <img src="https://cdn-icons-png.flaticon.com/512/8996/8996200.png" alt="Se Soigner">Se Soigner
      </button>

      <button @click="abandonnerCombat" class="me-2 bg-warning bg-opacity-50">
        <img src="https://cdn-icons-png.flaticon.com/512/260/260182.png" alt="Abandonner"> Abbandonner
      </button>

      <!-- Historique des logs des attaques -->
      <div class="historique-logs mt-3">
        <h6 v-for="(log, index) in historiqueLogs.slice().reverse()" :key="index">{{ log }}</h6>
      </div>
    </div>

  </div>

  <h2 class="mt-5"> Côté Code:</h2>
  <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
    <figure class="border rounded p-3 bg-primary bg-opacity-10">
      <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
      <img src="../../assets/TP/JeuTourParTourTemplate1.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourTemplate2.webp" alt="template" class="rounded" style="max-width: 1000px;">
    </figure>
    <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
      <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
      <img src="../../assets/TP/JeuTourParTourScript1.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourScript2.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourScript3.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourScript4.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourScript5.webp" alt="script" class="rounded mb-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourScript6.webp" alt="script" class="rounded" style="max-width: 1000px;">
    </figure>
    <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
      <figcaption class="mb-3 text-decoration-underline">le style:</figcaption>
      <img src="../../assets/TP/JeuTourParTourStyle1.webp" alt="script" class="rounded me-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourStyle2.webp" alt="script" class="rounded me-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourStyle3.webp" alt="script" class="rounded me-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourStyle4.webp" alt="script" class="rounded me-2" style="max-width: 1000px;">
      <img src="../../assets/TP/JeuTourParTourStyle5.webp" alt="style" class="rounded" style="max-width: 1000px;">
    </figure>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

/**
 * Vie actuelle du joueur.
 * @type {Ref<number>}
 */
const vieJoueur = ref(100);

/**
 * Vie actuelle de l'adversaire.
 * @type {Ref<number>}
 */
const vieAdversaire = ref(100);

/**
 * Tour actuel du jeu.
 * @type {Ref<number>}
 */
const tourActuel = ref(0);

/**
 * Gagnant du jeu.
 * @type {Ref<string|null>}
 */
const gagnant = ref(null);

/**
 * Message indiquant qui attaque.
 * @type {Ref<string>}
 */
const messageAttaque = ref('');

/**
 * Nombre de tours restants avant que l'attaque spéciale soit rechargée.
 * @type {Ref<number>}
 */
const rechargeSpeciale = ref(0);

/**
 * Indique si une action est en cours pour empêcher le spam des boutons.
 * @type {Ref<boolean>}
 */
const actionEnCours = ref(false);

/**
 * Historique des logs des attaques.
 * @type {Ref<Array<string>>}
 */
const historiqueLogs = ref([]);

/**
 * GIF du joueur (GIF de base).
 * @type {Ref<string>}
 */
const gifJoueur = ref('https://gbf.wiki/images/thumb/9/9a/Npc_zoom_3030104000_01.png/480px-Npc_zoom_3030104000_01.png');

/**
 * GIF de l'adversaire (GIF de base).
 * @type {Ref<string>}
 */
const gifAdversaire = ref('https://ssb.wiki.gallery/images/thumb/8/8c/Ken.png/1200px-Ken.png');

/**
 * État réactif du joueur pour la classe conditionnelle liée à l'attaque.
 * @type {Ref<boolean>}
 */
 const joueurActive = ref(false);

/**
 * État réactif du joueur pour la classe conditionnelle liée à l'attaque spéciale.
 * @type {Ref<boolean>}
 */
 const joueurRage = ref(false);

/**
 * État réactif du joueur pour la classe conditionnelle liée au soin.
 * @type {Ref<boolean>}
 */
 const joueurSoin = ref(false);

/**
 * État réactif de l'adversaire pour la classe conditionnelle liée à l'attaque.
 * @type {Ref<boolean>}
 */
 const adversaireActive = ref(false);

/**
 * Réinitialise le jeu pour un nouveau combat.
 */
const reinitialiserJeu = () => {
  vieJoueur.value = 100;
  vieAdversaire.value = 100;
  tourActuel.value = 0;
  gagnant.value = null;
  messageAttaque.value = '';
  rechargeSpeciale.value = 0;
  actionEnCours.value = false;
  historiqueLogs.value = [];
  gifJoueur.value = 'https://gbf.wiki/images/thumb/9/9a/Npc_zoom_3030104000_01.png/480px-Npc_zoom_3030104000_01.png'; // GIF de base du joueur
  gifAdversaire.value = 'https://ssb.wiki.gallery/images/thumb/8/8c/Ken.png/1200px-Ken.png'; // GIF de base de l'adversaire
};

/**
 * Ajoute un message à l'historique des logs.
 * @param {string} message - Le message à ajouter.
 */
const ajouterLog = (message) => {
  historiqueLogs.value.push(message);
  if (historiqueLogs.value.length > 5) {
    historiqueLogs.value.shift();
  }
};

/**
 * Permet au joueur de lancer une attaque.
 */
const attaquerAdversaire = () => {
  if (!actionEnCours.value) {
    actionEnCours.value = true;
    joueurActive.value = true;
    const degats = Math.floor(Math.random() * 10) + 1;
    vieAdversaire.value -= degats;
    messageAttaque.value = 'Le joueur attaque ! Dégats: ' + degats;
    ajouterLog(messageAttaque.value);
    gifJoueur.value = 'https://i.pinimg.com/736x/8e/bb/02/8ebb021259d8d541aeec28347dd47025.jpg'; // GIF d'attaque du joueur
    setTimeout(() => {
      tourActuel.value++;
      attaquerJoueur();
      joueurActive.value = false;
      if (rechargeSpeciale.value > 0) {
        rechargeSpeciale.value--;
      }
      gifJoueur.value = 'https://gbf.wiki/images/thumb/9/9a/Npc_zoom_3030104000_01.png/480px-Npc_zoom_3030104000_01.png'; // GIF de base du joueur
    }, 2000);
  }
};

/**
 * Permet au joueur de lancer une attaque spéciale.
 * Disponible tous les 3 tours.
 */
const attaqueSpecialeAdversaire = () => {
  if (rechargeSpeciale.value === 0 && !actionEnCours.value) {
    actionEnCours.value = true;
    joueurRage.value = true;
    const degats = Math.floor(Math.random() * 20) + 1;
    vieAdversaire.value -= degats;
    messageAttaque.value = 'Le joueur lance une attaque spéciale ! Dégats: ' + degats;
    ajouterLog(messageAttaque.value);
    rechargeSpeciale.value = 2;
    gifJoueur.value = 'https://freepngimg.com/download/street_fighter/21248-1-ryu-photos.png'; // GIF d'attaque spéciale du joueur
    setTimeout(() => {
      tourActuel.value++;
      attaquerJoueur();
      joueurRage.value = false;
      gifJoueur.value = 'https://gbf.wiki/images/thumb/9/9a/Npc_zoom_3030104000_01.png/480px-Npc_zoom_3030104000_01.png'; // GIF de base du joueur
    }, 2000);
  }
};

/**
 * Permet au joueur de se soigner.
 * La vie ne peut pas dépasser 100.
 */
 const soignerJoueur = () => {
  if (!actionEnCours.value) {
    actionEnCours.value = true;
    joueurSoin.value = true;
    const soin = Math.floor(Math.random() * 10) + 1;
    vieJoueur.value = Math.min(vieJoueur.value + soin, 100);
    messageAttaque.value = 'Le joueur se soigne ! Soin: ' + soin;
    ajouterLog(messageAttaque.value);
    gifJoueur.value = 'https://www.culture-games.com/wp-content/uploads/personnages/Ryu_TvC.png'; // GIF de soin du joueur
    setTimeout(() => {
      tourActuel.value++;
      attaquerJoueur();
      if (rechargeSpeciale.value > 0) {
        rechargeSpeciale.value--;
      }
      joueurSoin.value = false;
      gifJoueur.value = 'https://gbf.wiki/images/thumb/9/9a/Npc_zoom_3030104000_01.png/480px-Npc_zoom_3030104000_01.png'; // GIF de base du joueur
      gifAdversaire.value = 'https://media.eventhubs.com/images/2009/11/09_transsf4ken.png'; // GIF d'attaque de l'adversaire
      adversaireActive.value = true;
      setTimeout(() => {
        gifAdversaire.value = 'https://ssb.wiki.gallery/images/thumb/8/8c/Ken.png/1200px-Ken.png'; // GIF de base de l'adversaire
        adversaireActive.value = false;
        actionEnCours.value = false;
      }, 2000);
    }, 2000);
  }
};


/**
 * Permet à l'adversaire de lancer une attaque.
 */
const attaquerJoueur = () => {
  const degats = Math.floor(Math.random() * 15) + 1;
  vieJoueur.value -= degats;
  messageAttaque.value = 'L\'adversaire attaque ! Dégats: ' + degats;
  adversaireActive.value = true;
  ajouterLog(messageAttaque.value);
  gifAdversaire.value = 'https://media.eventhubs.com/images/2009/11/09_transsf4ken.png'; // GIF d'attaque de l'adversaire
  setTimeout(() => {
    gifAdversaire.value = 'https://ssb.wiki.gallery/images/thumb/8/8c/Ken.png/1200px-Ken.png'; // GIF de base de l'adversaire
    adversaireActive.value = false;
    actionEnCours.value = false;
  }, 2000);
};

/**
 * Permet au joueur d'abandonner le combat.
 */
const abandonnerCombat = () => {
  if (!actionEnCours.value) {
    vieJoueur.value = 0;
    gagnant.value = 'adversaire';
    messageAttaque.value = 'Le joueur a abandonné le combat.';
    ajouterLog(messageAttaque.value);
  }
};

/**
 * Surveille les niveaux de vie du joueur et de l'adversaire pour déterminer le gagnant.
 */
watch([vieJoueur, vieAdversaire], () => {
  if (vieJoueur.value <= 0 && vieAdversaire.value <= 0) {
    gagnant.value = 'aucun';
  } else if (vieJoueur.value <= 0) {
    gagnant.value = 'adversaire';
  } else if (vieAdversaire.value <= 0) {
    gagnant.value = 'joueur';
  }

  if (gagnant.value) {
    setTimeout(reinitialiserJeu, 5000);
  }
});

</script>

<style>
/* Style de la barre de vie */
.barre-de-vie {
  width: 100%;
  background-color: rgb(192, 16, 16);
  margin-bottom: 10px;
}

/* Style de la vie */
.vie {
  height: 20px;
  background-color: rgb(19, 137, 173);
}

/* Style des images des personnages */
.image-personnage {
  width: auto;
  height: 200px;
  display: block;
  margin: 10px auto;
  animation-name: base;
  animation-duration: 500ms;
  animation-timing-function:linear;
  animation-iteration-count: infinite;
}

/* Style des images des boutons */
button img {
  width: auto;
  height: 50px;
}

/* Style de l'historique des logs */
.historique-logs {
  height: 100px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  background-color: whitesmoke;
}

.attaque{
  animation-name: attack;
  animation-duration: 300ms;
}

.attaqueSpe{
  animation-name: hadoken;
  animation-duration: 100ms;
}

.soin{
  animation-name: seSoigner;
}

.finCombat{
  width: 1000px;
}

/*animation de base*/
@keyframes base{
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translateY(5px);
  }
  50%{
    transform: translateY(0);
  }
  75%{
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(0);
  }
}

/*animation d'attaque*/
@keyframes attack{
  0%{
    transform: translateX(0);
  }
  12%{
    transform: translateX(5px);
  }
  25%{
    transform: translateX(0);
  }
  37%{
    transform: translateX(-5px);
  }
  50%{
    transform: translateX(0);
  }
  62%{
    transform: translateX(5px);
  }
  75%{
    transform: translateX(0);
  }
  87%{
    transform: translateX(-5px);
  }
  100%{
    transform: translateX(0);
  }
}

/*animation de soin*/
@keyframes seSoigner{
  0%{
    transform: rotateY(90deg);
  }
  25%{
    transform: rotateY(180deg);
  }
  50%{
    transform: translateY(0);
  }
  75%{
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(0);
  }
}

/*animation d'attaque spéciale*/
@keyframes hadoken{
  0%{
    transform: translateX(0);
  }
  12%{
    transform: translateX(10px);
  }
  25%{
    transform: translateX(0);
  }
  37%{
    transform: translateX(-10px);
  }
  50%{
    transform: translateX(0);
  }
  62%{
    transform: translateX(10px);
  }
  75%{
    transform: translateX(0);
  }
  87%{
    transform: translateX(-10px);
  }
  100%{
    transform: translateX(0);
  }
}

</style>