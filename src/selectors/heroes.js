// getVisibleHeroes
export default (heroes, { title, galaxy, sortBy}) => {
    return heroes.filter(hero => {
        const titleMatch =
            hero.title.toLowerCase().includes(title.toLowerCase());
        return titleMatch;
    }).sort((hero1, hero2) => {
        if (sortBy === 'title') {
            return hero1.title.localeCompare(hero2.title);
        } else if (sortBy === 'galaxy') {
            return hero1.galaxy.localeCompare(hero2.galaxy);
        }
    });
}
