import FooterText from "./footer_text";
import Copyright from "../assets/Copyright.png";
import facebook from "../assets/sponsorse/facebook.png";
import instagram from "../assets/sponsorse/instagram.png";
import tiktok from "../assets/sponsorse/tiktok.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div>
          <FooterText
            title="CENTER TIZI-OUZOU"
            text_1="Rue des frères Beggaz - Galerie Stiti au 1er etage - la tour Tizi Ouzou"
            text_2="elitesalgerie@gmail.com"
            text_3="+213 770 307 515"
          />
        </div>
        <div>
          <FooterText
            title="CENTER BEJAIA"
            text_1="Rue Nacer Boumdaoui- Batiment A1 au 1er etage - Bejaia"
            text_2="elitesalgerie@gmail.com"
            text_3="+213 770 375 299"
          />
        </div>
      </div>
      <ul className="footer_ul">
        <li>Elites School of English .</li>
        <li>
          <ul className="footer_ul sponsorse">
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={tiktok} alt="" />
            </li>
          </ul>
        </li>
        <li className="li_copyright">
          Copyright <img src={Copyright} alt="" className="copyright" /> All
          rights reserved .
        </li>
      </ul>
    </div>
  );
}

export default Footer;
