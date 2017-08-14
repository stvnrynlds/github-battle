var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    console.log(lang);
    this.setState(() => {
      return { 
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage} 
      />
    )
  }
}

const SelectLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            className={lang === props.selectedLanguage ? 'is-selected' : ''}
            onClick={props.onSelect.bind(null, lang)} 
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Popular;