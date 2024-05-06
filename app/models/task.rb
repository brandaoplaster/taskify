# frozen_string_literal: true
class Task < ApplicationRecord
  belongs_to :category
  validates :title, :description, presence: true
end
