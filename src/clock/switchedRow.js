function switchedRow(num, row) {
    const switchFirstCell          = [1, 0, 0];
    const switchThirdCell          = [0, 0, 1];
    const switchFirstAndThirdCell  = [1, 0, 1];
    const switchAll                = [1, 1, 1];

    num = Number(num);

    let map = {};
    let result = [];

    switch (row) {
        case 1:
            map = {
                1: switchThirdCell,
                4: switchFirstAndThirdCell
            };
            result = map[num] || switchAll;
            break;

        case 2:
            map = {
                0: switchFirstAndThirdCell,
                4: switchFirstAndThirdCell,
                5: switchFirstCell,
                6: switchFirstCell,
                8: switchFirstAndThirdCell,
                9: switchFirstAndThirdCell
            };
            result = map[num] || switchThirdCell;
            break;

        case 3:
            map = {
                0: switchFirstAndThirdCell,
                1: switchThirdCell,
                7: switchThirdCell
            };
            result = map[num] || switchAll;
            break;

        case 4:
            map = {
                0: switchFirstAndThirdCell,
                2: switchFirstCell,
                6: switchFirstAndThirdCell,
                8: switchFirstAndThirdCell,
            };
            result = map[num] || switchThirdCell;
            break;

        case 5:
            map = {
                1: switchThirdCell,
                4: switchThirdCell,
                7: switchThirdCell
            };
            result = map[num] || switchAll;
            break;
            
        default: 
            break;
    }

    return result;
}

export default switchedRow;