<template>
  <div>
    <div class="row dashboard-info-widgets">
        <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
            <div class="info-widget-inner">
            <div class="stats">
                <div class="info-title">{{title}}</div>
                <div class="stats-title">Produção Total Semanal</div>
                <div class="stats-number">
                <i class="ion ion-ios-trending-up-outline text-primary stats-icon icon-wide"></i>
                {{data.weekly_prod}}
                </div>
            </div>
            </div>
        </vuestic-widget>
        </div>
        <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-info">
            <div class="info-widget-inner">
            <div class="stats">
                <div class="info-title">{{title}}</div>
                <div class="stats-title">Maior Lote Semanal</div>
                <div class="stats-number">
                <i class="ion ion-ios-arrow-round-up stats-icon icon-wide"></i>
                <span v-if="data.weekly_type">{{data.weekly_type}}</span>
                <span v-else>-</span>
                </div>
            </div>
            </div>
        </vuestic-widget>
        </div>
        <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
            <div class="info-widget-inner">
            <div class="stats">
                <div class="info-title">{{title}}</div>
                <div class="stats-title">Produção Total do Dia</div>
                <div class="stats-number">
                <i v-if="data.daily_prod" class="ion ion-ios-cube-outline text-primary stats-icon icon-wide"></i>
                {{data.daily_prod}}
                </div>
            </div>
            </div>
        </vuestic-widget>
        </div>
        <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-info">
            <div class="info-widget-inner">
            <div class="stats">
                <div class="info-title">{{title}}</div>
                <div class="stats-title">Início da Produção</div>
                <div class="stats-number">
                <i v-if="data.daily_init" class="ion ion-ios-time-outline stats-icon icon-wide"></i>
                {{data.daily_init}}
                </div>
            </div>
            </div>
        </vuestic-widget>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cards-group',
    props: ['title', 'data']
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-title {
      font-size: 1rem;
      justify-content: center;
      text-decoration-line: underline;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>