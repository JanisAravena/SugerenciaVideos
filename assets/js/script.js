// Implementación del patrón Módulo mediante IIFE
const Reproductor = (function () {
  // Función privada para cambiar la URL del iframe
  const insertarVideo = function (url, id) {
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };

  // Retorna una función pública
  return {
    reproducir: function (url, id) {
      insertarVideo(url, id);
    },
  };
})();

// Clase padre Multimedia
class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = function () {
      return _url;
    };
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

// Clase hija Reproductor
class ReproductorMultimedia extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia() {
    Reproductor.reproducir(this.getUrl(), this.id);
  }

  setInicio(tiempo) {
    let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
    document.getElementById(this.id).setAttribute("src", nuevaUrl);
  }
}

// Crear instancias para música, película y serie
const musica = new ReproductorMultimedia(
  "https://www.youtube.com/embed/TACe0dgjVrM",
  "musica"
);
const pelicula = new ReproductorMultimedia(
  "https://www.youtube.com/embed/k6BwxWADPF0",
  "peliculas"
);
const serie = new ReproductorMultimedia(
  "https://www.youtube.com/embed/--RBg_OPkgA",
  "series"
);

// Reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio del video de música
musica.setInicio(60);
