function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard
  ("20/11",
   "Domingo", 
   createGame("qatar", "13:00", "ecuador")) +

  createCard(
    "21/11",
    "Segunda",
    createGame("englaterra", "10:00", "iran") +
    createGame("senegal", "13:00", "holanda") +
    createGame("estados unidos", "16:00", "gales")
  ) +

  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "07:00", "arabia") +
    createGame("dinamarca", "10:00", "tunisia") +
    createGame("mexico", "13:00", "polonia") +
    createGame("frança", "16:00", "australia")
  ) +

  createCard(
    "22/11",
    "Quarta",
    createGame("marroco", "07:00", "croacia") +
    createGame("alemanha", "10:00", "japão") +
    createGame("espanha", "13:00", "costa rica") +
    createGame("belgica", "16:00", "canada") 
  ) +

  createCard(
    "22/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguai", "10:00", "koreia") +
    createGame("portugal", "13:00", "gana") +
    createGame("brazil", "16:00", "serbia")
  ) +

  createCard(
    "22/11",
    "sexta",
    createGame("gales", "07:00", "iran") +
    createGame("qatar", "10:00", "senegal") +
    createGame("holanda", "13:00", "ecuador") +
    createGame("englaterra", "16:00", "estados unidos")
  ) 

