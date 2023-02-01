<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

    import rules from '$lib/assets/HybridiSpeksi ry säännöt.pdf'
    import register from '$lib/assets/HybridiSpeksi ry rekisteriseloste.pdf'
    import medals from '$lib/HybridiSpeksi ry merkkiohjesääntö.pdf'

    export let data;
    let orgData = data.orgData.items[0].data;
</script>
<svelte:head>
    <title>Yhteystiedot - HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksin hallituksen ja tuotantotiimin yhteystiedot." />
</svelte:head>
<section class="row">
    <img class="logo" src="./logo.png" alt="" />
    {#each orgData as group}
    <h2>{group.tableName}</h2>
    <ul>
    {#each group.people as person}
        {#if (group.id == 'yhdenvertaiset' && person.link)}
        <li>
            <span class="text">
                {person.text} <a href="{person.link}" target="_blank" rel="noreferrer">
                    linkki lomakkeeseen</a> <Fa icon={faExternalLink} />
            </span>
        </li>        
        {:else}
        <li>
            <span class="left">{person.name}</span>
            <span class="right">{person.title}</span>
        </li>
        {/if}
    {/each}
    </ul>
    {/each}
    <div id="rules">
        <a href={rules}>Yhdistyksen säännöt</a>
        <a href={register}>Rekisteriseloste</a>
        <a href={medals}>Merkkiohjesääntö</a>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo {
            width: 30vw;
        }
        h2 {
            color: rgb(83, 83, 83);
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            li {
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                
                span {
                    padding: 0.5rem 1rem;
                    width: 25vw;
                    @media screen and (max-width:700px) {
                        width: 50vw;
                    }
                    &.left {
                        text-align: right;
                    }
                    &.right {
                        text-align: left;
                    }
                    &.text {
                        text-align: center;
                        width: 50vw;
                        @media screen and (max-width:700px) {
                            width: 90vw;
                        }
                    }
                }
            }
        }
    }
    #rules {
        display: flex;
        justify-content: center;
        a {
            padding: 20px;
        }
    }
</style>