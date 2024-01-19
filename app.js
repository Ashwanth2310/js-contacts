let arr =[];

function getData(){
  const getMessage = document.getElementById('message');


  axios 
  .get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    console.log(res.data);

    const result = res.data;

    result.forEach((user) =>{
      const getPlayer = document.createElement('div');
      getPlayer.setAttribute('id','player');
      getPlayer.setAttribute('class', 'player');

      const name = document.createElement('div');
      const email = document.createElement('div');
      const phone = document.createElement('div');
      const website= document.createElement('div');
      const company = document.createElement('div');
      const city = document.createElement('div');
      const zipcode = document.createElement('div');

      name.innerText = user.name;
      email.innerText = user.email;
      phone.innerText = user.phone;
      website.innerText = user.website;
      company.innerText = user.company;
      city.innerText = user.city;
      zipcode.innerText = user.zipcode;

      getPlayer.append(name);
      getPlayer.append(email);
      getPlayer.append(phone);
      getPlayer.append(website);
      getPlayer.append(company);
      getPlayer.append(city);
      getPlayer.append(zipcode);

      arr.push(getPlayer);
    })
    arr.forEach((ele)=> {
      getMessage.append(ele);
    })

      console.log(getBody);
  })
  .catch((error) => {
    console.log("Promise Rejected lol")
    console.log(error.message);
  });
}
// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
