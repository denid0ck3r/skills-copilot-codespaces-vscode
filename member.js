function skillsMember() {
    // this is a private function
    function getSkills() {
        return ['JavaScript', 'CSS', 'HTML'];
    }

    // this is a public function
    return {
        getSkills: getSkills
    };
}