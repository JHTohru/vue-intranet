<template>
    <div
        type="dark"
        id="sidebar"
        class="flex-column p-0">
        <b-link
            to="/index"
            class="p-0 m-0">
            <b-img
                src="~/static/percycle-logo.png"
                class="w-100"/>
        </b-link>
        <b-nav class="w-100">
            <template v-for="(item, index) of items">
                <li
                    :key="item.name"
                    :class="{ active: expanded === index || item.href === currentRoute || (item.children && item.children.find(i => i.href === currentRoute)) }"
                    class="w-100 nav-item border-primary">
                    <template v-if="item.children">
                        <a
                            @click="expanded !== index ? expanded = index : expanded = NaN"
                            class="nav-link d-block p-3 pl-4">
                            <font-awesome-icon
                                :icon="item.icon"
                                class="mr-2"/>
                            <span>{{ item.name }}</span>
                            <font-awesome-icon
                                :icon="['fas', 'angle-down']"
                                :style="{ transform: `rotate(${expanded !== index ? 90 : 0}deg)` }"
                                class="float-right mt-1 arrow"/>
                        </a>
                        <b-collapse
                            v-if="item.children"
                            :visible="expanded === index"
                            :id="'collapse' + index"
                            class="pl-4">
                            <b-nav class="flex-column">
                                <b-nav-item
                                    v-for="child of item.children"
                                    :key="child.name"
                                    :to="child.href"
                                    exact-active-class="active">{{ child.name }}</b-nav-item>
                            </b-nav>
                        </b-collapse>
                    </template>
                    <b-link
                        @click="expanded = index"
                        v-else
                        :to="item.href"
                        exact-active-class="active"
                        class="nav-link d-block p-3 pl-4">
                        <font-awesome-icon
                            :icon="item.icon"
                            class="mr-2"/>
                        <span>{{ item.name }}</span>
                    </b-link>
                </li>
            </template>
        </b-nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expanded: NaN,
            items: [
                {
                    name: 'Painel',
                    href: '/index',
                    icon: ['fas', 'th-large'],
                },
                {
                    name: 'Campanhas',
                    children: [
                        {
                            name: 'Grupos de Campanha',
                            href: '/campaign-group/list',
                        },
                        {
                            name: 'Nova Campanha',
                            href: '/campaign-group/new',
                        },
                    ],
                    icon: ['fas', 'chart-bar'],
                },
                {
                    name: 'Campanhas Diárias',
                    children: [
                        {
                            name: 'Grupos de Campanhas Diárias',
                            href: '/daily-campaign-group/list',
                        },
                        {
                            name: 'Cobertura',
                            href: '/daily-campaign-group/new',
                        },
                    ],
                    icon: ['fas', 'chart-bar'],
                },
                {
                    name: 'Produtos',
                    href: '/product',
                    icon: ['fas', 'football-ball'],
                },
                {
                    name: 'Região',
                    href: '/region',
                    icon: ['fas', 'globe'],
                },
                {
                    name: 'Publishers',
                    href: '/publishers',
                    icon: ['fas', 'store'],
                },
                {
                    name: 'Redes',
                    href: '/networks',
                    icon: ['fas', 'project-diagram'],
                },
                {
                    name: 'Advertisers',
                    href: '/advertiser',
                    icon: ['fas', 'chart-line'],
                },
                {
                    name: 'Usuários',
                    href: '/users',
                    icon: ['fas', 'address-card'],
                },
                {
                    name: 'Relatórios',
                    children: [
                        {
                            name: 'Campanhas',
                            href: 'reports/campaigns',
                        },
                        {
                            name: 'Cobertura',
                            href: 'reports/coverage',
                        },
                        {
                            name: 'Receita por categoria',
                            href: 'reports/recipe-by-category',
                        },
                    ],
                    icon: ['fas', 'chart-pie'],
                },
            ]
        };
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        },
    },
};
</script>

<style lang="scss">
    #sidebar {
        height: 100%;
        background-color: #2f4050;

        a {
            cursor: pointer;
            font-weight: bold;
            color: #a7b1c2;
            transition: color ease-in 100ms;

            &:hover, &.active {
                color: white;
            }
        }

        & > .nav > .nav-item {
            transition: border-left ease-in 100ms;

            &.active, &:hover {
                background-color: #293846;
                border-style: solid;
                border-width: 0 0 0 4px;

                & > a {
                    color: white;
                }
            }

            .arrow {
                transition: transform ease-in 100ms;
            }
        }
    }
</style>