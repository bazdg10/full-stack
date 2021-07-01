import rules from '../../images/fishing.png';

const Rules = ({setViewRules, viewRules}) => {

    const handleSubmit = (e) => {
        console.log('submitting')
        setViewRules(viewRules=e.target.value);
    }


    return (
        <div>
            <img src={rules} alt="Rules of the game" />
            <button type="submit" value="0" onClick={handleSubmit} >Who's Playing?</button>
        </div>
    )

}

export default Rules