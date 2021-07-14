import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSideBar(props) {
  
  return (
    <Box>
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
};

export default function Home() {
  const gitHubUser = 'pedrovazs';
  const pessoasFavoritas = [
    'marcobrunodev',
    'rafaballerini',
    'peas',
    'juunegreiros',
    'omariosouto',
    'felipefialho'
  ];  

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem-Vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Favoritos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(itemAtual => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} style={{ borderRadius: '8px'}} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
