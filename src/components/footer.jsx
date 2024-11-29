import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

function SocialMediaIcons() {
  return (
    <div className="flex gap-x-6 social-media">
      <a href="" className="p-3">
        <Facebook size={18} />
      </a>
      <a href="" className="p-3">
        <Instagram size={18} />
      </a>
      <a href="" className="p-3">
        <Linkedin size={18} />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer px-28 flex flex-col justify-center py-12 bg-footerBG">
      <div className="footer-contact-infos flex justify-between flex-wrap gap-20">
        <div className="flex me-10">
          <MapPin size={38} className="pe-3 text-accentHover" />
          <div className="adresse flex flex-col">
            <h4 className="mb-2 font-bold text-lg">Adresse</h4>
            <p>Plot E63 rue de la coriandre</p>
            <p>Ebène Maurice</p>
          </div>
        </div>
        <div className="flex me-10">
          <Phone size={38} className="pe-3 text-accentHover" />
          <div className="contact-info flex flex-col">
            <h4 className="mb-2 font-bold text-lg">Contact</h4>
            <p>
              <strong>Télephone :</strong> +230 54297857
            </p>
            <p>
              <strong>Email :</strong> omaranli56@gmail.com
            </p>
          </div>
        </div>
        <div className="flex me-10">
          <Clock size={38} className="pe-3 text-accentHover" />
          <div className="contact-info flex flex-col">
            <h4 className="mb-2 text-white font-bold text-lg">Horaires</h4>
            <p className="text-white">
              <strong>Lundi-vendredi :</strong> 11h:30 - 23h
            </p>
            <p className="text-white">
              <strong>Samedi, Dimanche :</strong> Fermé
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="mb-3 font-bold text-lg">
            <strong>Suivez-nous !</strong>
          </h4>
          <SocialMediaIcons />
        </div>
      </div>

      <div className="footer-copyright flex flex-col justify-center items-center w-full">
        <hr className="bg-black w-full" />
        <p className="text-center pt-3 text-md">
          &#169; <strong>Le Banquet</strong> 2024: Tout droit reservé.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
