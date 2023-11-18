function reverseTab(tab) {
  for (let i = 0; i < tab.length / 2; i++) {
    [tab[i], tab[tab.length - 1 - i]] = [tab[tab.length - 1 - i], tab[i]];
  }
  return tab;
}

let tab = [0, 1, 3, 4, 5];
console.log("reverse Tab --> ", reverseTab(tab));
