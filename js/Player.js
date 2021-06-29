class Player {
  constructor(){
    //player properties
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    // change the reference to the database as all the players now are going t
    //o be inside "players" in the database
    /* use property index of the player to update that particular player's 
    values in the database
     */
        var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  /* thisfunction will not be attached to any particular player 
  static functions are those comon functions which are called by class themslves
  rather than by objects of the class*/
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
