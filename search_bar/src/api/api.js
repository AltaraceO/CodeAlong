import

useEffect(function () {
    const fetchTemp = async() => {
     await fetch(
        "https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data) {
            setWeatherData(data.current);
          // }
        });
      
    }
    fetchTemp();
 
  }, []);