

const RenderMarkdown = ({ markdown }) => {
   const lines = markdown.split('\n');
   const elements = [];

   const headerStyles = {
      h1: { fontSize: '30px', marginTop: '10px', fontFamily: 'Montserrat-Bold' },
      h2: { fontSize: '18px', marginTop: '8px', fontFamily: 'Montserrat-Regular' },
      h3: { fontSize: '16px', marginTop: '6px', fontFamily: 'Montserrat-Bold' },
      normal_text: { fontSize: '14px', fontFamily: 'Montserrat-Regular' },
      bold_text: { fontSize: '14px', fontFamily: 'Montserrat-Bold' }
   };

   const renderTextWithBold = (text, defaultStyle, key) => {
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = text.split(boldRegex);
      
      return parts.map((part, index) => {
         if (index % 2 === 1) {
            // Bold text
            return <span key={`${key}-${index}`} style={headerStyles.bold_text}>{part}</span>;
         } else {
            // Normal text
            return <span key={`${key}-${index}`} style={defaultStyle}>{part}</span>;
         }
      });
   };

   lines.forEach((line, index) => {
      if (line.startsWith('###')) {
         elements.push(
            <h3 key={`h3-${index}`} style={headerStyles.h3}>
               {line.slice(3).trim()}
            </h3>
         );
      } else if (line.startsWith('##')) {
         elements.push(
            <h2 key={`h2-${index}`} style={headerStyles.h2}>
               {line.slice(2).trim()}
            </h2>
         );
      } else if (line.startsWith('#')) {
         elements.push(
            <h1 key={`h1-${index}`} style={headerStyles.h1}>
               {line.slice(1).trim()}
            </h1>
         );
      } else {
         elements.push(
            <p key={`line-${index}`} style={{ marginTop: '5px', marginLeft: '10px' }}>
               {renderTextWithBold(line, headerStyles.normal_text, `line-${index}`)}
            </p>
         );
      }
   });

   return <div>{elements}</div>;
};






export default RenderMarkdown;