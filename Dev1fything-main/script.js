var cursor = document.getElementById('custom-cursor');

document.addEventListener("DOMContentLoaded", function(e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  cursor.style.display = 'block';
});

document.addEventListener('mousemove', function (e) {
  var cx = e.clientX;
  var cy = e.clientY;
  var cxd = e.clientX -= 6;
  var cyd = e.clientY -= 10;
  cursor.style.transform = 'translate(' + cxd + 'px, ' + cyd + 'px)';
  cursor.style.display = 'block';
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function clickbutton2() {
  window.location.href = "/Dev1fything-main/suggestion";
}

function clickbutton1() {
  window.location.href = "/Dev1fything-main/chat";
}

function clickbutton3() {
  window.location.href = "/Dev1fything-main/bug-report/index.html";
}

function aboutblank() {
  var url = prompt("Paste the link you want to be embedded into an about:blank page.", "https://example.com")
; var urlObj = new window.URL(window.location.href); win = window.open()
; win.document.body.style.margin = "0"; win.document.body.style.height = "100vh"; var iframe = win.document.createElement
("iframe"); iframe.style.border = "none"; iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.margin = "0"; iframe.referrerpolicy
= "no-referrer"; iframe.allow = "fullscreen"; iframe.src = url.toString(); win.document.body.appendChild(iframe); var script = win.document.createElement
("script"); script.src = "https://3kh0.github.io/js/main.js"; win.document.body.appendChild(script); 
}

function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('searchlist');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}