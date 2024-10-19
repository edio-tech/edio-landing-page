
const MarkdownEditterHelpPopup = () =>
{
    return (
        <div>
            Instructions:
                <p style={{ fontSize: '1.5rem', padding: '0.5rem' }}># - For Title</p>
                <p style={{ fontSize: '1.2rem', padding: '0.5rem' }}>## - For Heading</p>
                <p style={{ fontSize: '1rem', padding: '0.5rem' }}>### - For SubHeading</p>
                <p style={{ fontSize: '0.8rem', padding: '0.5rem' }}>**Word** - To render word in <b>Bold</b></p>
        </div>
    )
}

export default MarkdownEditterHelpPopup;