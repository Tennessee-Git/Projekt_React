import moment from 'moment';

// export const filterShowingsNow = (showings) => {
//     const now = moment().format('DD-MM-YYYY HH:mm');
//     let output =[];
//     showings.forEach(showing => {
//         if(moment(showing.date).isSameOrAfter(now))
//             output.push(showing);
//     });
//     output.sort((a,b) => ((moment(a.date)).isSameOrAfter(moment(b.date))) ? 1 : -1);
//     return output;
// }

export function filterShowingsNow (showings) {
    let output = [];
    const now = moment().format('DD-MM-YYYY HH:mm');
    showings.forEach(showing => {
        if( moment(showing.date).isSameOrAfter(now) )
            output.push(showing);
    });
    return output;
}

export const filterFromLast7Days = (showings) => {
    const now = new Date();
    const before = moment(now).subtract(7, 'd').toDate();
  
    const lastShowings = showings.filter( (showing) => {
      return moment(showing.date,'DD-MM-YYYY HH:mm').isBetween(moment(before), moment(now))
    });
    return lastShowings;
}