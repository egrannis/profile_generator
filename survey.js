const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {//q1
  console.log(`Name: ${name}`);

  rl.question('What\'s an activity you like doing?', (activity) => {//q2
    console.log(`Favourite activity: ${activity}`);

    rl.question('What do you listen to while doing that?', (song) => {//q3
      console.log(`Favourite artist / song: ${song}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        console.log(`Favourite artist / song: ${meal}`);

        rl.question(' What\'s your favourite thing to eat for that meal?', (food) => {
          console.log(`Favourite thing to eat for your meal: ${food}`);

          rl.question(' Which sport is your absolute favourite?', (sport) => {
            console.log(`Favourite sport: ${sport}`);

            rl.question(' What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              console.log(`Superpower: ${superpower}`);

              console.log(`${name} loves listening to ${song} when they do their favourite activity, ${activity}. Their favourite meal of the day is ${meal} because their favourite thing to eat is ${food}. Their favourite sport is ${sport}. Their superpower (what they're amazing at) is ${superpower}. Ask them about it!`);
                
              rl.close();
            });
          });
        });
      });
    });
  });
});










