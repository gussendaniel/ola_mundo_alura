
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
    return (

       <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
       >

        <h3 className={styles.subtitulo}>
            Olá, eu sou Antônio!
        </h3>

        <img 
            src={fotoSobreMim}
            alt="Foto do Antônio"
            className={styles.fotoSobreMim}
        />
            <p className={styles.paragrafo}>
                Daniel Gussen Lorenzo é um profissional apaixonado por tecnologia e desenvolvimento de software, conhecido por sua dedicação e expertise em criar soluções inovadoras. Com uma sólida formação em programação, Daniel se destaca em diversos aspectos da engenharia de software, incluindo desenvolvimento de aplicações web e móveis. Seu comprometimento com a qualidade e a eficiência reflete-se em seus projetos, onde busca sempre implementar as melhores práticas e técnicas.
            </p>

            <p className={styles.paragrafo}>
                No campo do desenvolvimento web, Daniel tem experiência significativa com frameworks modernos como React e com linguagens de programação como JavaScript. Seu envolvimento com projetos desafiadores, como o sistema Traffic Light, demonstra sua capacidade de trabalhar em ambientes dinâmicos e com demandas específicas. Ele também se dedica a aprimorar suas habilidades técnicas, explorando conceitos avançados como polimorfismo em JavaScript e outras técnicas inovadoras.
            </p>

            <p className={styles.paragrafo}>
                Além de suas habilidades técnicas, Daniel é conhecido por sua abordagem colaborativa e sua capacidade de liderar equipes em projetos complexos. Sua habilidade em comunicar conceitos técnicos de forma clara e acessível é um ativo valioso, especialmente em contextos onde a comunicação eficiente é crucial. Com uma carreira em constante evolução e um entusiasmo genuíno por novas tecnologias, Daniel continua a contribuir significativamente para o avanço da indústria de software.
            </p>

        </PostModelo>

    )
}