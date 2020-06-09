// Tower of Hanoi

// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!).
// This is how it goes:

// There are three rods and a number of disks of different sizes which can slide
// onto any rod.The puzzle starts with the disks neatly stacked in ascending order
// of size on one rod, the smallest disk at the top(making a conical shape).The
// other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to another rod (can't
// be the original rod where it was stacked before) where it will be stacked in the
// ascending order as well.This should be done obeying the following rules:
// i) Only one disk may be moved at a time
// ii) Each move consists of taking the upper disk from one of the rods and sliding
// it onto another rod, on top of the other disks that may already be present on
// that rod.
// iii) A larger disk may not placed on top of a smaller disk

function towerOfHanoi(disks) {
    function printTowers(towers) {
        function addSpaces(disk) {
            if (disk) {
                if (typeof disk === "number")
                    return "=".repeat(disk) + " ".repeat(disks - disk);
                else return disk + " ".repeat(disks - disk.length);
            }
            return " ".repeat(disks);
        }

        console.log(
            `        | ${addSpaces("T1")} | ${addSpaces("T2")} | ${addSpaces(
                "T3"
            )}`
        );
        for (let i = disks - 1; i >= 0; i--) {
            console.log(
                `Layer ${i + 1} | ${addSpaces(towers[0][i])} | ${addSpaces(
                    towers[1][i]
                )} | ${addSpaces(towers[2][i])}`
            );
        }
        console.log("\n");
    }

    const towers = [[], [], []];
    for (let i = 0; i < disks; i++) {
        towers[0][i] = disks - i;
    }

    // Print initial arrangement
    printTowers(towers);

    // Start moving disks
    moveDisk(disks, towers, 0, 2, 1);

    function moveDisk(disks, towers, towerFrom, towerTo, towerAux) {
        // If tower is only 1 disk high, move disk to towerTo, then unwind
        if (disks === 1) {
            towers[towerTo].push(towers[towerFrom].pop());
            printTowers(towers);
            return;
        }

        // Otherwise, move all disks except for bottom to towerAux (winding)
        moveDisk(disks - 1, towers, towerFrom, towerAux, towerTo);

        // Move remaining bottom disk to towerTo
        towers[towerTo].push(towers[towerFrom].pop());
        printTowers(towers);

        // Move all disks back on top of bottom disk (winding)
        moveDisk(disks - 1, towers, towerAux, towerTo, towerFrom);
    }
}

towerOfHanoi(5);
