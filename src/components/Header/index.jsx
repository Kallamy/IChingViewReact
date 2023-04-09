import { Container, LogoArea, FlagsArea} from "./styles";

export default function Header() {
    return (
       <Container>
            <LogoArea>
                <div className="logo">I Ching<span>view</span></div>
            </LogoArea>
            <FlagsArea>
                 <img src="./src/assets/images/br.png" class="flag"/>
                 <img src="./src/assets/images/us.png" class="flag"/>
            </FlagsArea>
        </Container>
        
    );
}