interface MajorCredits {
    credits: number;
    _brand: 'major';
}

interface MinorCredits {
    credits: number;
    _brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'major'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'minor'
    };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };
const majorTotal = sumMajorCredits(majorSubject1, majorSubject2);

const minorSubject1: MinorCredits = { credits: 1, _brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 2, _brand: 'minor' };
const minorTotal = sumMinorCredits(minorSubject1, minorSubject2);