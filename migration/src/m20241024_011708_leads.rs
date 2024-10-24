use loco_rs::schema::table_auto_tz;
use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                table_auto_tz(Leads::Table)
                    .col(pk_auto(Leads::Id))
                    .col(string(Leads::Name))
                    .col(string(Leads::Company))
                    .col(string(Leads::Email))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Leads::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Leads {
    Table,
    Id,
    Name,
    Company,
    Email
}


