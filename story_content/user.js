function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rpThGJ6auE":
        Script1();
        break;
      case "6U6ELq8wBgR":
        Script2();
        break;
      case "5yK2NTKEgiU":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');

audio.volume=0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');

audio.volume=0.0;
}

