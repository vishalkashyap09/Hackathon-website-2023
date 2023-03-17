(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy,
    dayMonth = "05/06/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

new TypeIt("#element", { 
  lifeLike: false, 
  speed: 0 
})
.type("s")
.pause(168)
.type("t")
.pause(181)
.type("a")
.pause(138)
.type("t")
.pause(189)
.type("y")
.pause(84)
.type("s")
.pause(1282)
.delete(1)
.pause(203)
.delete(1)
.pause(1151)
.type("u")
.pause(69)
.type("s")
.pause(786)
.type("_")
.pause(469)
.type("c")
.pause(133)
.type("o")
.pause(10)
.type("o")
.pause(287)
.type("d")
.pause(186)
.type("e")
.pause(295)
.move(-2)
.pause(140)
.delete(1)
.pause(130)
.move(null, { to: "END" })
.pause(192)
.delete(1)
.pause(729)
.type("e")
.pause(501)
.type("_")
.pause(956)
.type("0")
.go();

var collapsible = document.getElementsByClassName("faq-collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log('hello');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      console.log('is it woking?');
    } else {
      content.style.maxHeight = content.scrollHeight + "em";
      console.log('hmm');
    }
  });

  
}
