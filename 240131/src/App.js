import './App.css';

function App(){
  const name = '나나';
  const naver = {
    name: 'git-hub',
    url: 'https://github.com/na-r0'
  }

  return (
    <div className='App'>
      <h1 style={{
        color: 'white',
        backgroundColor: '#E8D9FF',
        fontSize: '20px'
      }}
      >
       {'2024년 01월 30일'}, <p> Welcome, {name}</p>
      </h1>

      <a href={naver.url}
      style={{
        color: '#D8D8D8',
        fontSize: '25px'
      }}
      >{naver.name}</a>
    </div>
  );
}

export default App;